import { Component, OnInit } from "@angular/core";

@Component({
  selector: "fav-photos",
  templateUrl: "./fav-photos.component.html",
  styleUrls: ["./fav-photos.component.css"],
})
export class FavPhotosComponent implements OnInit {
  photosTitle = "Photo/Image Section Title Here";
  image1 =
    "https://www.launchcode.org/assets/icons/target-00c7a0bc7776901e3c5cdc4c36c465f19e41a249bc7267a595f0bfa14ab944b7.png";
  image2 =
    "https://www.indiewire.com/wp-content/uploads/2014/03/trailer-park-boys.jpg";
  image3 =
    "https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png";

  constructor() {}

  ngOnInit() {}
}
