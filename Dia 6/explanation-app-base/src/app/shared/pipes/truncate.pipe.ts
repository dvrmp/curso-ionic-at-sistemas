import { Pipe, PipeTransform,Injectable } from '@angular/core';

@Pipe({
  name: 'truncate'
})
@Injectable({
  providedIn:'root'
})
export class TruncatePipe implements PipeTransform {

  transform(text: string, n?: number,words?:boolean): string {

    if(words){
      if(n>=9) return text;
      else{
        return this.sumWords(text.split(' '),n)+'...';
      }
    }
    else{
      const lastLetter = text.substring(0,n).split(' ').pop();
      const lastWord = text.split(' ').filter((word)=>word.startsWith(lastLetter)===true)[0];
      if(lastWord!=''){
        return !n || text.length < n ? text : text.substring(0,n+(lastWord.length-lastLetter.length))
      }
      else{
        return !n || text.length < n ? text : text.substring(0,n) + '...'
      }
    }
  }

  private sumWords(wordsOnText:string[],maxWords:number){
    let text = '';
    for (let index = 0; index < maxWords; index++) {
      text+=' '+wordsOnText[index];
    }
    return text;
  }
}
