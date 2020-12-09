document.querySelector('.btnyes').addEventListener('click', myClick);

const bookHolderOne = document.querySelector('.book-holder-1');
const bookHolderTwo = document.querySelector('.book-holder-2');
const bookHolderThri = document.querySelector('.book-holder-3');
const bookHolderFo = document.querySelector('.book-holder-4');
const bookHolderFive = document.querySelector('.book-holder-5');

let namesBook = []


function myClick(){
	const img = document.createElement("img");
	let a = document.querySelector('.inp').value;
	let loW = a.toLowerCase();
	namesBook.push(loW);
	let namesBookTwo = [...new Set(namesBook)];
	let b = (namesBookTwo[0]);
	let c = (namesBookTwo[1]);
	let d = (namesBookTwo[2]);
	let e = (namesBookTwo[3]);
	let f = (namesBookTwo[4]);
	for( let i = 0; i < 1; i++){
		if( loW == b){
			img.src = "https://i.ibb.co/jWnqjjP/bool.png"
			bookHolderOne.appendChild(img);
		} else if (loW == c){
			img.src = "https://i.ibb.co/jWnqjjP/bool.png"
			bookHolderTwo.appendChild(img);
		}else if (loW == d){
			img.src = "https://i.ibb.co/jWnqjjP/bool.png"
			bookHolderThri.appendChild(img);
		}else if (loW == e){
			img.src = "https://i.ibb.co/jWnqjjP/bool.png"
			bookHolderFo.appendChild(img);
		}else if (loW == f){
			img.src = "https://i.ibb.co/jWnqjjP/bool.png"
			bookHolderFive.appendChild(img);
		}else {
			alert('Все полки заняты!')
		};
	};

	for(i = 0; i<1 ; i++){
		if( loW == b){
			document.querySelector('p').innerHTML = a[0].toUpperCase() + 
			a.slice(1);
		} else if (loW == c){
			document.querySelector('p').innerHTML = a[0].toUpperCase() + 
			a.slice(1);
		} else if (loW == d){
			document.querySelector('p').innerHTML = a[0].toUpperCase() + 
			a.slice(1);
		} else if (loW == e){
			document.querySelector('p').innerHTML = a[0].toUpperCase() + 
			a.slice(1);
		} else if (loW == f){
			document.querySelector('p').innerHTML = a[0].toUpperCase() + 
			a.slice(1);
		} else {
			document.querySelector('p').innerHTML = "Такой полки нет!"
		};
	}
}



document.querySelector('.btn-del').addEventListener('click', delet);




function delet(){
	const img = document.createElement("img");
	let a = document.querySelector('.inp').value;
	let loW = a.toLowerCase();
	namesBook.push(loW);
	let namesBookTwo = [...new Set(namesBook)];
	let b = (namesBookTwo[0]);
	let c = (namesBookTwo[1]);
	let d = (namesBookTwo[2]);
	let e = (namesBookTwo[3]);
	let f = (namesBookTwo[4]);

	for( let i = 0; i < 1; i++){
		if( loW == b){
			bookHolderOne.innerHTML = "";
		}else if (loW == c){
			bookHolderTwo.innerHTML = "";
		} else if (loW == d){
			bookHolderThri.innerHTML = "";
		} else if (loW == e){
			bookHolderFo.innerHTML = "";
		} else if (loW == f){
			bookHolderFive.innerHTML = "";
		}
	}
};