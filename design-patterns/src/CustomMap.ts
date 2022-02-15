/* Instructions to every other class
    on how they can be an argument to 'addMarker
    Great because if a class has the method listed then they can proceed to be a marker
    It's like a single value can have multiple types
   */
export class Mappable {
  location: {
    lat: number;
    lng: number;
  };
  markerContent: () => string;
  color: string;
}

/* Private modifier
Would be great to hide all of the methods that are not use so that it makes it hard to break the app. The other google Map methods are not  */
export class CustomMap {
  private googleMap: google.maps.Map;

  constructor(divId: string) {
    /* clicking in MAP send you to a d.ts file
     * d.ts file are types files for packages
     */
    this.googleMap = new google.maps.Map(document.getElementById(divId), {
      zoom: 1,
      center: {
        lat: 0,
        lng: 0,
      },
    });
  }

  /* inverse the dependency, inputs need to meet this class expected inputs
  doesn't scale well to all classes that want to use this method because it leads to a long or statements */
  addMarker(mappable: Mappable): void {
    const marker = new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: mappable.location.lat,
        lng: mappable.location.lng,
      },
    });

    marker.addListener("click", () => {
      const infoWindow = new google.maps.InfoWindow();

      infoWindow.setContent(mappable.markerContent());
      infoWindow.open(this.googleMap, marker);
    });
  }
}
