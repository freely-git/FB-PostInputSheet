const floatingWindow = document.createElement("div");
floatingWindow.id = "info";
floatingWindow.innerHTML = `
<div id="info">
    <div class="btn_css" data-bs-toggle="collapse" data-bs-target="#collapseWidthExample" aria-expanded="false" aria-controls="collapseWidthExample" id="collapse">
        <svg id="switch" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-star" viewBox="0 0 16 16">
        <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/>
        </svg>
    </div>
    <div style="min-height: 388px;">
        <div class="collapse collapse-horizontal" id="collapseWidthExample">
            <div class="d-flex justify-content-center" id="loading" style="visibility:hidden;">
                <div class="spinner-border" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
            </div>
            <div class="card card-body"  style="width: 300px;">
                <div class="mb-3">  
                    <label for="name" class="form-label">管理员名</label>
                    <input type="text" class="form-control" id="name" placeholder="填写名称">
                </div>
                <div class="mb-3" class="webUrlBox">
                    <label for="webUrl" class="form-label">谷歌web应用链接</label>
                    <input type="text" class="form-control" id="webUrl" placeholder="填写谷歌部署的web应用链接">
                </div>
                <label for="postLink" class="form-label">贴文链接</label> 
                <div class="input-group mb-3">
                    <input type="text" class="form-control" id="postLink" placeholder="填写贴文链接">
                    <button class="btn btn-outline-primary" type="button"  id="autoGet">自动获取</button>
                </div>
                <div class="mb-3">
                    <label for="picLink" class="form-label">贴文图片链接</label>
                    <input type="text" class="form-control" id="picLink" placeholder="填写图片链接">
                </div>
                <div class="mb-3">
                    <label for="exampleFormControlTextarea1" class="form-label">贴文引导语</label>
                    <textarea class="form-control" id="content" rows="3"></textarea>
                </div>
                <div class="mb-3">
                    <label for="postType" class="form-label">贴文类型</label>
                    <input type="text" class="form-control" id="postType" placeholder="填写贴文类型">
                </div>
                <div class="mb-3">
                    <label for="postType" class="form-label">点赞、留言、分享</label>
                    <div class="input-group">
                        <input type="text" id="like"  class="form-control" placeholder="点赞">
                        <input type="text" id="message" class="form-control" placeholder="留言" >
                        <input type="text" id="share"  class="form-control" placeholder="分享">
                    </div>
                </div>
                <div>
                    <button type="button" class="btn btn-outline-primary" id="submit">提交</button>
                    <button type="button" class="btn btn-outline-danger" id="clear">清除缓存</button>
                </div>
            </div>
        </div>
    </div>
</div>
`;  

document.body.appendChild(floatingWindow);
