let info = document.querySelector("#tab_info");
                info.addEventListener("click",function() {

                    info.style.backgroundColor = "rgba(255, 255, 255, 0.301)";
                    calendar.style.backgroundColor = "rgb(34, 50, 65)";
                    like.style.backgroundColor = "rgb(34, 50, 65)";
                    todo.style.backgroundColor = "rgb(34, 50, 65)";
                })
                
                let calendar = document.querySelector("#tab_calendar");
                calendar.addEventListener("click",function() {

                    info.style.backgroundColor = "rgb(34, 50, 65)";
                    calendar.style.backgroundColor = "rgba(255, 255, 255, 0.301)";
                    like.style.backgroundColor = "rgb(34, 50, 65)";
                    todo.style.backgroundColor = "rgb(34, 50, 65)";
                })
                
                let like = document.querySelector("#tab_like");
                like.addEventListener("click",function() {
                    
                    info.style.backgroundColor = "rgb(34, 50, 65)";
                    calendar.style.backgroundColor = "rgb(34, 50, 65)";
                    like.style.backgroundColor = "rgba(255, 255, 255, 0.301)";
                    todo.style.backgroundColor = "rgb(34, 50, 65)";
                })

                let todo = document.querySelector("#tab_todo");
                todo.addEventListener("click",function() {

                    info.style.backgroundColor = "rgb(34, 50, 65)";
                    calendar.style.backgroundColor = "rgb(34, 50, 65)";
                    like.style.backgroundColor = "rgb(34, 50, 65)";
                    todo.style.backgroundColor = "rgba(255, 255, 255, 0.301)";
                })