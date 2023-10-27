
  (function(){
    $(function(){
      // 드래그 박스 취득
      var containerEl = $('#external-events-list')[0];
      // 설정하기
      new FullCalendar.Draggable(containerEl, {
        itemSelector: '.fc-event',
        eventData: function(eventEl) {
          return {
            title: eventEl.innerText.trim()
          }
        }
      });
      // 드래그 아이템 추가하기
      for(var i=1; i<=5;i++) {
        var $div = $("<div class='fc-event fc-h-event fc-daygrid-event fc-daygrid-block-event'></div>");
        $event = $("<div class='fc-event-main'></div>").text("일정"+i);
        $('#external-events-list').append($div.append($event));
      }

      // 사용자가 입력한 이벤트를 저장할 배열
      var userEvents = [];

      // 캘린더 element 취득
      var calendarEl = $('#calendar1')[0];
      // full-calendar 생성하기
      var calendar = new FullCalendar.Calendar(calendarEl, {
        // 해더에 표시할 툴바
        headerToolbar: {
          left: 'prev,next today',
          center: 'title',
          right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
        },
        // 초기 날짜 설정 (설정하지 않으면 오늘 날짜가 보인다.)
        locale: 'ko', // 한국어 설정
        editable: true, // 수정 가능
        droppable: true,  // 드래그 가능
        drop: function(arg) { // 드래그 엔 드롭 성공시
          // 드래그 박스에서 아이템을 삭제한다.
          arg.draggedEl.parentNode.removeChild(arg.draggedEl);
        },
        eventClick: function(info) {
          // 이벤트를 클릭했을 때 수정 및 삭제 버튼을 보여줌
          var eventId = info.event.id;
          var $eventList = $('#event-list');
          $eventList.empty();

          // 수정 가능한 입력 필드 추가
          var editInput = "<input type='text' class='edit-event-input' id='edit-input-" + eventId + "' value='" + info.event.title + "'>";
          var editButton = "<span class='edit-event-button' data-id='" + eventId + "'>수정 완료</span>";
          $eventList.append(editInput);
          $eventList.append(editButton);

          // 삭제 버튼 추가
          var deleteButton = "<span class='delete-event-button' data-id='" + eventId + "'>삭제</span>";
          $eventList.append(deleteButton);
        }
      });

      // 새 이벤트 추가 버튼 클릭 이벤트 핸들러
      $('#add-event').on('click', function() {
        var eventTitle = $('#event-input').val();
        if (eventTitle.trim() !== "") {
          var $div = $("<div class='fc-event fc-h-event fc-daygrid-event fc-daygrid-block-event'></div>");
          $event = $("<div class='fc-event-main'></div>").text(eventTitle);
          $('#external-events-list').append($div.append($event));

          // 입력 필드 초기화
          $('#event-input').val("");

          // fullcalendar draggable로 만들기
          new FullCalendar.Draggable($div[0], {
            itemSelector: '.fc-event',
            eventData: function(eventEl) {
              return {
                title: eventEl.innerText.trim()
              }
            }
          });

          // 사용자가 입력한 이벤트를 배열에 추가
          userEvents.push({
            title: eventTitle,
            id: 'event' + (userEvents.length + 1)
          });
        }
      });

      // 수정 완료 버튼 클릭 이벤트 핸들러
      $('#event-list').on('click', '.edit-event-button', function() {
        var eventId = $(this).data('id');
        var editInputValue = $('#edit-input-' + eventId).val();

        calendar.getEventById(eventId).setProp('title', editInputValue);

        // 수정 입력 필드와 버튼 제거
        $('.edit-event-input').remove();
        $('.edit-event-button').remove();

        // 이벤트 리스트 업데이트
        updateEventList(userEvents);
      });

      // 삭제 버튼을 클릭했을 때 이벤트를 배열에서 제거
      $('#event-list').on('click', '.delete-event-button', function() {
        var eventId = $(this).data('id');
        calendar.getEventById(eventId).remove();
        userEvents = userEvents.filter(function(event) {
          return event.id !== eventId;
        });
        updateEventList(userEvents);
      });

      // 이벤트 리스트 업데이트 함수
      function updateEventList(events) {
        var $eventList = $('#event-list');
        $eventList.empty();
        for (var i = 0; i < events.length; i++) {
          var event = events[i];
          var deleteButton = "<span class='delete-event-button' data-id='" + event.id + "'>삭제</span>";
          var editButton = "<span class='edit-event-button' data-id='" + event.id + "'>수정</span>";
          $eventList.append(event.title + " " + editButton + " " + deleteButton + "<br>");
        }
      }

      // 캘린더 랜더링
      calendar.render();
    });
  })();
