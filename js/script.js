$(document).ready(function () {

    $('#get-data').click(function () {

// Wariant 1
    //     $.get('https://akademia108.pl/api/ajax/get-post.php')
    //         .done(function (data) {
    //             console.log(data);

    //             let pId = $('<p></p>').text(`Post ID: ${data.id}`);
    //             let pUserId = $('<p></p>').text(`User ID: ${data.userId}`);
    //             let pTitle = $('<p></p>').text(`Title: ${data.title}`);
    //             let pBody = $('<p></p>').text(`Body: ${data.body}`);
    //             let hr = $(`<hr />`);

    //             let jsBody = $('body');

    //             jsBody.append(pId);
    //             jsBody.append(pUserId);
    //             jsBody.append(pTitle);
    //             jsBody.append(pBody);
    //             jsBody.append(hr);

    //             // console.log(data);
    //         })

    //         .fail(function(error) {
    //             console.error(error);
    //         });
    //     console.log('click #get data')

    // })

// Wariant 2

    $.getJSON('https://akademia108.pl/api/ajax/get-post.php')
            .done(function (data) {
                console.log(data);

                let pId = $('<p></p>').text(`Post ID: ${data.id}`);
                let pUserId = $('<p></p>').text(`User ID: ${data.userId}`);
                let pTitle = $('<p></p>').text(`Title: ${data.title}`);
                let pBody = $('<p></p>').text(`Body: ${data.body}`);
                let hr = $(`<hr />`);

                let jsBody = $('body');

                jsBody.append(pId);
                jsBody.append(pUserId);
                jsBody.append(pTitle);
                jsBody.append(pBody);
                jsBody.append(hr);

                // console.log(data);
            })

            .fail(function(error) {
                console.error(error);
            });
        // console.log('click #get data')

    })


    // console.log('działa')
})