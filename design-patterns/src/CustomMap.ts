/* Private modifier
Would be great to hide all of the methods that are not use so that it makes it hard to break the app. The other google Map methods are not  */
export class CustomMap {
  private googleMap: google.maps.Map;

  constructor(divId: string) {
    this.googleMap = new google.maps.Map(document.getElementById(divId), {
      zoom: 1,
      center: {
        lat: 0,
        lng: 0,
      },
    });
  }
}
