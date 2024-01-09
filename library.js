let myLibrary = [];
//const book1 = new Book(0,"Harry Potter", "J.K. Rowling", 200, "read");
//myLibrary.push(book1);
let bookNum = myLibrary.length;

//console.log(bookNum);

function Book(id,title,author, pages, read) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}





console.log(myLibrary);


for (let x = 0; x < bookNum; x++)
{
    let library = document.createElement("div");
    let btn = document.createElement("button");
    let read = document.createElement("button");
    read.id = `read${x}`;
    read.className = "read";
    read.innerText = ` ${myLibrary[x].read}` 
    btn.id = `${x}`;
    btn.className = "remove";
    btn.innerText = "remove";
    library.className = `lib${x}`;
    library.id = `lib${x}`;
    text = `${myLibrary[x].title}` + ` ${myLibrary[x].author}`;
    library.innerText=text;
    library.appendChild(read);
    library.appendChild(btn);
    
    document.getElementById("lib").appendChild(library);
    reading();
    
}





function addBookToLibrary(e) {
    e.preventDefault();
    
    author = document.getElementById("author").value;
    title = document.getElementById("title").value;
    pages = document.getElementById("pages").value;
    let read = document.getElementById("read");
    console.log(read);
    let unread = document.getElementById("unread");
    console.log(read);
   
   
    if (author == ""|| title == "" || pages == "" || (read.checked == false && unread.checked == false))
    {
        alert("please complete the form")
    }
    else {
        let already;
        if (read.checked == true)
        {
            console.log("TTWATEADSGDSAGS")
            already = "read";
            
        } 
        else if (read.checked == false) 
            {already = "unread"};

        console.log(author);
        console.log(title);
        console.log(pages);
        console.log(already);
        console.log(this);
    
        let newBook = new Book(`${bookNum}`,`${title}`,`${author}`, `${pages}`, `${already}`);
        
       

        console.log(newBook);
        myLibrary.push(newBook);
        let library = document.createElement("div");
        library.className = `lib${bookNum}`;
        library.id = `lib${bookNum}`;
        text = `${newBook.title} ` + `${newBook.author}`;
        library.innerText = text;
        let btn = document.createElement("button");
        btn.id = `${bookNum}`;
        btn.className = "remove";
        btn.innerText = "remove";
        let readBtn = document.createElement("button");
        readBtn.id = `read${bookNum}`;
        readBtn.className = "read";
        readBtn.innerText = `${newBook.read}`;
        document.getElementById("lib").appendChild(library);
        document.getElementById(`lib${bookNum}`).appendChild(readBtn);
        document.getElementById(`lib${bookNum}`).appendChild(btn);
        
        bookNum++;
        console.log(bookNum);
        let btns = document.querySelectorAll(".remove");
        console.log(btns);
        btns.forEach(function(e) {
    
            e.addEventListener("click", function(){
                console.log(e.innerText);
                console.log(e.id);
                for (let x = 0; x < bookNum; x++)
                {
                    if (myLibrary[x].id == e.id)
                    {
                        console.log(`${e.id}`);
                        document.getElementById(`lib${e.id}`).remove();
        
                    }
                }
            })
            
            
        })
        
        
    }

    reading();
}




document.getElementById("add").addEventListener("click",addBookToLibrary);





//btns = document.querySelectorAll(".remove");
//console.log(btns);



function reading() {

    
     let alreadyRead = document.querySelectorAll(".read")
     alreadyRead.forEach(function(e) {
        e.addEventListener("click", function() {
            let id = e.id[4];
            console.log(id);
            console.log(myLibrary[id]);
            if (myLibrary[id].read == "read") {
                myLibrary[id].read = "unread";
                e.innerHTML = "unread";
            }
            else {
                myLibrary[id].read = "read";
                e.innerHTML = "read";
            }

        })
     })

}