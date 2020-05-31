$(document).ready(function(){
    $('.devourBtn').on('click', function(e){
        
        const id = $(this).parent().parent().attr('id');
        console.log(id)

        $.ajax({
            method: 'PUT',
            url: '/',
            data: {
                id
            }
        }).then((res) => {
            console.log(res)
            location.reload();
        })
    });

    $('.tossBtn').on('click',function(e){
        const id = $(this).parent().parent().attr('id');

        $.ajax({
            method: 'DELETE',
            url: '/',
            data: {
                id
            }
        }).then(res => {
            console.log(res)
            location.reload();
        })
    })
})