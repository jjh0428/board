window.addEventListener("load", function(){
    var section = document.querySelector(".board_input");

    var titleInput = section.querySelector(".title-input");
    var writerInput = section.querySelector(".writer-input");
    var pwInput = section.querySelector(".pw-input");
    var detailInput = section.querySelector(".detail-input");
    var menuListDiv = section.querySelector(".menu-list");
    var addButton = section.querySelector(".add-button");
    var delButton = section.querySelector(".del-button");

    addButton.onclick = function() {

        var title = titleInput.value;
        var html01 = '<a href="">'+title+'</a>';
        var div01 = document.createElement("div");
        div01.className = 'title';
        div01.innerHTML = html01;
        menuListDiv.appendChild(div01);

        var writer = writerInput.value;
        var div02 = document.createElement("div");
        div02.className = 'writer';
        div02.innerHTML = writer;
        menuListDiv.appendChild(div02);

        var pw = pwInput.value;
        var div03 = document.createElement("div");
        div03.className = 'pw';
        div03.innerHTML = pw;
        menuListDiv.appendChild(div03);

        var detail = detailInput.value;
        var div04 = document.createElement("div");
        div04.className = 'detail';
        div04.innerHTML = detail;
        menuListDiv.appendChild(div04);

    };

    delButton.onclick = function() {
        menuListDiv.remove();
    };
});
