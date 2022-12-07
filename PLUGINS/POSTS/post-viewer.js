import {Post,Section,Block} from './obj.js';
const myPost = new Post([]);
myPost.addSection();
myPost.addBlockIn(1);
myPost.addContIn(1,1,'<h1>Привет мир</h1>');
myPost.addContIn(1,1,'<p>Пора спать</p>');
$(document).ready(function(){
  myPost.init('.post-viewer');
  myPost.save();
  $('#addSection').click(function(){
    myPost.addSection();
    myPost.init('.post-viewer');
  });
});
