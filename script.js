console.log(emojiList);
let cards = document.getElementById("card");
let selectEmojiCategoryType = document.getElementById("selectEmojiCategoryType");
let userSearchEmoji = document.getElementById("search_field");
console.log(selectEmojiCategoryType);
console.log(userSearchEmoji);
console.log(card);

selectEmojiCategoryType.addEventListener('change',function(){
    let userSelectByCategory = selectEmojiCategoryType.value;
    // console.log(userSelectByCategory);
    if(userSelectByCategory == 'All'){
        displayEmojiData(emojiList);
    }else{
        let filterDataBySelectCategory = emojiList.filter(e =>e.category === userSelectByCategory);
        displayEmojiData(filterDataBySelectCategory);
    }
});



function displayEmojiData(filterEmojiData){
    cards.innerHTML='';
    filterEmojiData.forEach(e => {
    let cardDiv = document.createElement("cardDiv");
    cardDiv.innerHTML = `<div class="shadow-[0_10px_20px_rgba(240,_46,_170,_0.7)] text-3xl  p-1 m-3  w-20 ">${e.emoji}</div>`
    cards.append(cardDiv);
    });
}


function emojiSearch(e){
    let value = e.target.value;
    console.log(value);
    let filterEmojiData = emojiList.filter(e=>{
        if(e.description.indexOf(value) != -1 ){
            return true;
        }
        if(e.aliases.indexOf(value) != -1 ){
            return true;
        }
    })
    displayEmojiData(filterEmojiData);
}
userSearchEmoji.addEventListener('keyup',emojiSearch);
window.onload =()=> displayEmojiData(emojiList);