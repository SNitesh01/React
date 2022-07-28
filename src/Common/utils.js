



function paginate(array, currentPage, pageSize){
    let startIndex = currentPage*pageSize;
    let endIndex = startIndex + pageSize;
    return array.slice(startIndex, endIndex)
    
}

function sorting (array, sortBy, type, isAss){
    if(type === 'string'){
      array.sort((a,b) => { 
        a=a[sortBy].toUpperCase(); 
        b=b[sortBy].toUpperCase();
      
      if(a>b) return isAss ? 1: -1;
      if(a<b) return isAss ? -1 : 1;
      return 0; 
      
      });
  
    }else if (type === 'number'){
      array.sort((a,b) => {
        a = a[sortBy];
        b = b[sortBy];
        if(isAss)
        return a-b;
        return b-a;
      });
    }
     return array;
  }

  function search(e){
    // console.log(e)
    let keyword = e.target.value;
    let result = students.filter(stud =>
        students.name.split(" ").some(word =>
        word.toUpperCase().startsWith(keyword.toUpperCase())),
    );
   console.log(result)
 }



export {paginate, sorting, search}