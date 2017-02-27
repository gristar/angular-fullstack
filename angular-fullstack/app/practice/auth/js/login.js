/**
 * Created by chensheng on 2016/12/21.
 */
$(function () {
    $(".btn-login").on("click", function () {
        var username = $("input[name=username]").val();
        var password = $("input[name=password]").val();
        var data = {user: "111"};
        console.log(data);
        $.ajax({
            url: "/auth/login/verify",
            type: "get",
            data: data,
            success: function (rst) {
                console.log(rst);
            }
        })
    })
})