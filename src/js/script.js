
$(document).ready(function() {
    $('#imageCarousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });

    // 弹窗功能
    $('.view-details').click(function() {
        const id = $(this).data('id');
        let title, content;

        switch (id) {
            case '1':
                title = '景点1';
                content = 'This is a beautiful scenic spot, suitable for vacation and relaxation. Here, there is clear lake water and lush forest, making it an ideal place to escape from the hustle and bustle of the city.';
                break;
            case '2':
                title = '景点2';
                content = '这是一个历史名胜，适合了解当地文化。这里有古老的建筑和丰富的历史遗迹，是历史爱好者的天堂。';
                break;
            case '3':
                title = '景点3';
                content = '这是一个自然风光，适合徒步和摄影。这里有壮观的山脉和瀑布，是户外活动的绝佳选择。';
                break;
        }

        $('#detailTitle').text(title);
        $('#detailContent').text(content);
        $('#detailModal').modal('show');
    });
});