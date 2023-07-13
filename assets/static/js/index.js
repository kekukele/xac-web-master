$(function () {
    var tabName = $("#head").attr('data-set');
    $("#head").load('/assets/static/common/head.html', () => {
        $(tabName).addClass("layui-this")
    })
    $("#footer").load('/assets/static/common/footer.html');

    if ($(".scroll-to-target").length) {
        $(".scroll-to-target").on("click", function () {
            var target = $(this).attr("data-target");
            // animate
            $("html, body").animate({
                    scrollTop: $(target).offset().top,
                },
                1000
            );
            return false;
        });
    }

    $(window).on("scroll", function () {
        if ($(".scroll-to-top").length) {
            var strickyScrollPos = 100;
            if ($(window).scrollTop() > strickyScrollPos) {
                $(".scroll-to-top").fadeIn(500);
            } else if ($(this).scrollTop() <= strickyScrollPos) {
                $(".scroll-to-top").fadeOut(500);
            }
        }
    });

    $('#reports-version').click(function() {
        if($(this).prop('checked')) {
            $('#reports').html('English Version')
            $('#english-reports').show();
            $('#chinese-reports').hide();
        } else {
            $('#reports').html('Chinese Version')
            $('#english-reports').hide();
            $('#chinese-reports').show();
        }
    });
    $('#annual-version').click(function() {
        if($(this).prop('checked')) {
            $('#annual').html('English Version')
            $('#english-annual').show();
            $('#chinese-annual').hide();
        } else {
            $('#annual').html('Chinese Version')
            $('#english-annual').hide();
            $('#chinese-annual').show();
        }
    });
    $('#meeting-version').click(function() {
        if($(this).prop('checked')) {
            $('#meeting').html('English Version')
            $('#english-meeting').show();
            $('#chinese-meeting').hide();
        } else {
            $('#meeting').html('Chinese Version')
            $('#english-meeting').hide();
            $('#chinese-meeting').show();
        }
    });
})

$('.img-map').click(() => {
    openLink();
})


$('.modal-click').click(() => {
    openModel('Business Philosophy', 'XAC believes that it can only be as successful as the partners that trust our company to deliver high-quality commerce specific solutions. Join XAC, A Partner You Can Trust, and seize the opportunity to allow you to continue your personal and professional growth to achieve your life’s dreams.')
})

function openLink() {
    window.location.href="https://maps.google.com/?q=新竹市東區工業東九路同亨科技股份有限公司 XAC Automation Corporation";
}

function openModel(title, content) {
    layui.layer.open({
        type: 1, // page 层类型
        area: ['700px', '400px'],
        title: title,
        shade: 0.6, // 遮罩透明度
        shadeClose: true, // 点击遮罩区域，关闭弹层
        // maxmin: true, // 允许全屏最小化
        anim: 0, // 0-6 的动画形式，-1 不开启
        scrollbar: false,
        content: `<div style="padding: 20px;font-size: 15px; line-height: 30px; text-align: left; color: #969696">${content}</div>`
    });
}
