export class Post {
  constructor(post_content) {
    this.url = '';
    this.date  = '';
    this.autor = '';
    this.title = '';
    this.subtitle = '';
    this.pre_text = '';
    this.sections = post_content;
  }

  init(selector){
    $(selector).empty();
    console.log('Иницилизирую пост');
    for (var i = 0; i < this.sections.length; i++){
      $(selector).append('<section class = "post_section" id = "s'+(i+1)+'"></section>');
      for( var i2 = 0; i2 < this.sections[i].divs.length; i2++){
        $(selector+' #s'+(i+1)).append('<div id="d'+(i2+1)+'"></div>');
        for (var i3 = 0; i3 < this.sections[i].divs[i2].content.length; i3++){
          $(selector+' #s'+(i+1)+' #d'+(i2+1)).append(this.sections[i].divs[i2].content[i3]);
        }
      }
    }
  }
  addSection(){
    this.sections.push(new Section([]));
  }
  addBlockIn(sectNumber){
    console.log(this.sections[sectNumber-1]);
    this.sections[sectNumber-1].divs.push(new Block([]));
  }
  addContIn(sectNumber,blockNumber,content){
    this.sections[sectNumber-1].divs[blockNumber-1].content.push(content);
  }
  save(){
    console.log('Save');
    console.log(JSON.stringify(this));
  }
}

export class Section {
  constructor(divs) {
    this.divs = divs;
  }
}

export class Block {
  constructor(content) {
    this.content = content;
  }
}
