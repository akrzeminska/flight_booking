import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/Posts';
import { PotsHttpServiceService } from 'src/app/services/pots-http-service.service';

@Component({
  selector: 'app-test-posts',
  templateUrl: './test-posts.component.html',
  styleUrls: ['./test-posts.component.scss']
})
export class TestPostsComponent implements OnInit {
  rows: Post[] = [];

  constructor(private postsService: PotsHttpServiceService) { }

  ngOnInit(): void {
   this.postsService.getAllPosts().subscribe((posts) => {
    this.rows = posts;
   }) 
  }
}