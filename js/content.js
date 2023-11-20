let webUrl = "";
let initName = ""; 
let postUrl = ""
let initUrl = "https://script.google.com/macros/s/AKfycbzW0oYFgPgyTmXJqkEYcPmpEmEbl5UUVkaknJ3pNnSC5SQYr2XZoGjFk7jIaF-aLgApFg/exec";


chrome.storage.local.get("webUrl").then((e)=>{webUrl = e.webUrl});
chrome.storage.local.get("initName").then((e)=>{initName = e.initName});


$("#collapse").click(()=>{
    postUrl =  webUrl != undefined ? webUrl : initUrl;
    $("#name").val(initName);
    $("#webUrl").val(postUrl);
})




$("#autoGet").click(()=>{
    let domain = window.location.href
    if(domain.indexOf("permalink.php?") > 0 || domain.indexOf("posts") > 0 || domain.indexOf("story_fbid") > 0) {
        $("#postLink").val(domain);
    }
});

$("#submit").click(()=>{
    if($("#postLink").val() != "" && $("#postType").val() != "" && $("#like").val() != "" && $("#message").val() != "" && $("#share").val() != "" && $("#content").val() != "" && $("#name").val() != "") {
        postUrl = $("#webUrl").val() != undefined ? $("#webUrl").val() : initUrl;
        chrome.storage.local.set({initName: $("#name").val()});
        chrome.storage.local.set({webUrl: postUrl});



        const data = {
            postLink: $("#postLink").val(),
            picLink: $("#picLink").val(),
            postType: $("#postType").val(),
            like: $("#like").val(),
            message: $("#message").val(),
            share: $("#share").val(),
            content: $("#content").val(),
            name: $("#name").val()
        }

        $.post(postUrl, data, (res)=>{
            if(res.status == 200) {
                alert(res.message);
                $("#postLink").val("");
                $("#picLink").val("");
                $("#postType").val("");
                $("#like").val("");
                $("#message").val("");
                $("#share").val("");
                $("#content").val("");
            }else {
                alert("谷歌web应用链接错误");
            }
        }).fail(function() {
            alert( "error" );
        })

    }
})

$("#clear").click(()=>{
    let result = confirm("确定清除管理员名称和谷歌web应用程序网址吗？");
    if (result) {
        chrome.storage.local.remove(["webUrl", "initName"]);
        $("#name").val("");
        $("#webUrl").val(initUrl);
    }
})