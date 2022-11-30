// const imgDiv = document.querySelector('profile-pic-div');
// const img = document.querySelector('#photo');
// const file = document.querySelector('#file');
// const uploadBtn = document.querySelector('#uploadBtn');

// imgDiv.addEventListener('mouseenter',function(){
//     uploadBtn.style.display = "block"
// })
// imgDiv.addEventListener('mouseleave', function(){
//     uploadBtn.style.display = "none"
// })
//--------------------------------add question feild-------------------------------------
const questionContainer = document.getElementById("question-container");
function addNewquestion() {

    const questionDiv = document.createElement("div");
    questionDiv.id = "question";

    const lightBlue = document.createElement("div");
    lightBlue.id = "lightBlue";

    const input1 = document.createElement("input");
    input1.id = "input1"
    input1.placeholder = "Question"

    const lineDiv = document.createElement("div");
    lineDiv.className = "lineDiv";

    const lineDiv2 = document.createElement("div");
    lineDiv2.className = "lineDiv2";

    const input2 = document.createElement("input");
    input2.id = "input2"
    input2.innerText = "Answer"

    const btnDiv = document.createElement("div");
    btnDiv.className = "btnDiv";
    //--------------------------------select tag--------------------------------
    const selectTag = document.createElement("select");
    let unique = 'selectTag' + (new Date()).getTime();
    selectTag.id = unique;
    selectTag.style.marginTop = "29px";
    selectTag.style.outline = "none"

    const option2 = document.createElement("option");
    option2.id = "option2"
    option2.innerText = "Paragraph"

    const option1 = document.createElement("option");
    option1.innerText = "ShortAns"
    option1.id = "option1"

    const option3 = document.createElement("option")
    option3.id = "option3"
    option3.innerHTML = "Checkbox"
    //----------------------------------------------------------------------------
    selectTag.addEventListener("click", () => {
        let x = document.getElementById(unique).options[document.getElementById(unique).selectedIndex].innerText;
        input2.placeholder = x

        if (selectTag.value === "Checkbox") {
            input2.placeholder = "addOption"
            input2.innerHTML = ""
            //---------------------------------------------------------------------------
            input2.addEventListener("click", () => {
                const optionHolding = document.createElement("div")
                optionHolding.id = "optionHolding"
                const multipleOptions = document.createElement("input")
                multipleOptions.id = " multipleOptions"
                multipleOptions.placeholder = "option"

                input2.style.position = "relative"
                input2.style.top = "59px"

                btnDiv.style.position = "relative"
                btnDiv.style.top = "59px"

                optionHolding.appendChild(multipleOptions)
                questionDiv.appendChild(optionHolding)

            })
        }
    })
    //-----------------------------local storage---------------------------------------------
    document.getElementById("sendBtn").addEventListener("click", function () {

        localStorage.getItem("title");
        localStorage.setItem("title", titleInput.value);
        // console.log("local", titleInput.value)

        localStorage.getItem("questions");
        localStorage.setItem("questions", input1.value);

        localStorage.getItem("Ans");
        localStorage.setItem("Ans", input2.placeholder);

        localStorage.getItem("choice");
        // localStorage.setItem("choice", this.multipleOptions.value);

        var existingentries = JSON.parse(localStorage.getItem("allEntries"));
        // var existingentries2 = JSON.parse(localStorage.getItem("Entries"));

        if (existingentries == null) existingentries = [];
        const myObject = {
            questions: localStorage.getItem("questions"),
            ans: localStorage.getItem("Ans"),
            title: localStorage.getItem("title"),
            optionselect: localStorage.getItem("choice")
        };
        localStorage.setItem("myObject", JSON.stringify(myObject));
        existingentries.push(myObject);
        localStorage.setItem("allEntries", JSON.stringify(existingentries));
    });
    //------------------------------------------------------------------------------
    addbtn.addEventListener("click", () => {
        btnDiv.style.opacity = "0";
        lineDiv.style.backgroundColor = "#e4d6d6"
        lightBlue.style.opacity = 0
        questionDiv.style.marginBottom = "-200px"
        input2.style.borderBottomLeftRadius = "6px"
        input2.style.borderBottomRightRadius = "6px"
        return;
    });
    //------------------------------------------------------------------------------------
    input1.addEventListener("click", () => {
        lineDiv.style.opacity = "1"
        lineDiv.style.backgroundColor = "#450eb7"
        btnDiv.style.opacity = 1;
        lightBlue.style.opacity = 1
        questionDiv.style.marginBottom = "-153px"

        return;
    });

    //----------------------------delete button----------------------------
    const removeBtn = document.createElement("button");
    removeBtn.className = "removebtn"

    removeBtn.innerText = "delete";
    removeBtn.addEventListener("click", () => {
        questionDiv.remove();
        return;
    });
    //-------------------------------------------------------------------------------
    questionDiv.appendChild(lightBlue);

    questionDiv.appendChild(input1);
    questionDiv.appendChild(lineDiv);

    questionDiv.appendChild(input2);
    questionDiv.appendChild(lineDiv2);

    selectTag.appendChild(option1)
    selectTag.appendChild(option2)
    selectTag.appendChild(option3)

    btnDiv.appendChild(selectTag)

    btnDiv.appendChild(removeBtn);
    questionDiv.appendChild(btnDiv);
    questionContainer.appendChild(questionDiv);
}

//  -----------------------------------link & modal-----------------------------------
document.getElementById("sendBtn").addEventListener("click", function (e) {
    e.preventDefault();
    var modal = document.getElementById("myModal");
    modal.style.display = "block";

    var url = `http://127.0.0.1:5500/form.html?id = ${(Date.now())}`
    console.log("date", Date.now())

    document.getElementById("para").innerText = url

    var span = document.getElementsByClassName("close")[0];
    span.onclick = function () {
        modal.style.display = "none";
    };

    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    };

})
// console.log(Object.keys(JSON.parse(localStorage.getItem("allEntries"))).length)
// console.log((JSON.parse(localStorage.getItem("allEntries")))[0].questions)


