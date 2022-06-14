document.getElementById('btnAdd').addEventListener('click', addList);

function addList() {
    var dw = document.wData;

    if (!dw.title.value) {
        alert("제목이 입력되지 않았습니다.");
        dw.title.focus();
        return false;
    }
    if (!dw.writer.value) {
        alert("글쓴이가 입력되지 않았습니다.");
        dw.writer.focus();
        return false;
    }
    if (!dw.pw.value) {
        alert("비밀번호가 입력되지 않았습니다.");
        dw.pw.focus();
        return false;
    }
    if (!dw.detail.value) {
        alert("내용이 입력되지 않았습니다.");
        dw.detail.focus();
        return false;
    }

    alert("글이 등록되었습니다.");
}

function updateList() {
    var dw = document.wData;

    if (!dw.title.value) {
        alert("제목이 입력되지 않았습니다.");
        dw.title.focus();
        return false;
    }
    if (!dw.writer.value) {
        alert("글쓴이가 입력되지 않았습니다.");
        dw.writer.focus();
        return false;
    }
    if (!dw.pw.value) {
        alert("비밀번호가 입력되지 않았습니다.");
        dw.pw.focus();
        return false;
    }
    if (!dw.detail.value) {
        alert("내용이 입력되지 않았습니다.");
        dw.detail.focus();
        return false;
    }


    alert("글이 수정되었습니다.");
}

function re() {
    if(confirm("삭제하시겠습니까?")==true){
        alert("삭제되었습니다.");
    } else{
        alert("취소되었습니다.");
    }
}
