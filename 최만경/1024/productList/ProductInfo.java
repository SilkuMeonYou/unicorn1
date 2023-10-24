package productList;

public class ProductInfo {
    private String imageUrl;
    private String imageSub1;
    private String imageSub2;
    private String productName;
    private String productPrice;
    private int popularity;
    private int productNum;
    private String imagedetail;

    public ProductInfo() {
        // »ý¼ºÀÚ
    }

    public String getImageUrl() {
        return imageUrl;
    }

    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }

    public String getProductName() {
        return productName;
    }

    public void setProductName(String productName) {
        this.productName = productName;
    }

    public String getProductPrice() {
        return productPrice;
    }

    public void setProductPrice(String productPrice) {
        this.productPrice = productPrice;
    }

    public int getPopularity() {
        return popularity;
    }

    public void setPopularity(int popularity) {
        this.popularity = popularity;
    }

   public int getProductNum() {
      return productNum;
   }

   public void setProductNum(int productNum) {
      this.productNum = productNum;
   }

   @Override
   public String toString() {
      return "ProductInfo [imageUrl=" + imageUrl + ", productName=" + productName + ", productPrice=" + productPrice
            + ", popularity=" + popularity + ", productNum=" + productNum + "]";
   }

   public String getImageSub1() {
      return imageSub1;
   }

   public void setImageSub1(String imageSub1) {
      this.imageSub1 = imageSub1;
   }

   public String getImageSub2() {
      return imageSub2;
   }

   public void setImageSub2(String imageSub2) {
      this.imageSub2 = imageSub2;
   }
   
   public String getimagedetail() {
         return imagedetail;
      }

      public void setimagedetail(String imagedetail) {
         this.imagedetail = imagedetail;
      }
   
   
}