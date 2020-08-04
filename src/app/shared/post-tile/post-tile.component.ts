import { Component, OnInit } from '@angular/core';
import { faArrowUp, faArrowDown, faComments } from '@fortawesome/free-solid-svg-icons';
import { PostModel } from '../post-model';
import { PostService } from '../post.service';
import { Router } from '@angular/router';
import { Input } from '@angular/core';

@Component({
  selector: 'app-post-tile',
  templateUrl: './post-tile.component.html',
  styleUrls: ['./post-tile.component.css']
})
export class PostTileComponent implements OnInit {

  @Input() posts: PostModel[];

  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

  goToPost(id: number): void {
    console.log('+++++++++++++++++++');
    this.router.navigateByUrl('/view-post/'+id);
  }

}
