let webUrl = "";
let initName = ""; 
let postUrl = "";
let initUrl = "https://script.google.com/macros/s/AKfycbypXuyEYYHR6xCWkTGIbeaqQ-xa7FbTphaeSZrbgzIB3XwDLEoPh8uqJAHnYyO3waDG/exec";


chrome.storage.local.get("webUrl").then((e)=>{webUrl = e.webUrl});
chrome.storage.local.get("initName").then((e)=>{initName = e.initName});


$("#collapse").click(()=>{
    postUrl =  webUrl != undefined ? webUrl : initUrl;
    $("#name").val(initName);
    $("#webUrl").val(postUrl);   
})


$("#autoGet").click(()=>{
    let domain = window.location.href
    createThunderConn()
    console.log("test");
    if(domain.indexOf("permalink.php?") > 0 || domain.indexOf("posts") > 0 || domain.indexOf("story_fbid") > 0) {
        $("#postLink").val(domain);
    }
});

$("#submit").click(()=>{
    if($("#postLink").val() != "" && $("#postType").val() != "" && $("#name").val() != "") {
        $("#loading").css("visibility","");
        
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
            $("#loading").css("visibility","hidden");

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
        }).fail(() => {
            $("#loading").css("visibility","hidden");
            alert( "查看你的表格设置和或者的数据是否有问题" );
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