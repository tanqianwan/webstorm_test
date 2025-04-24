
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
                content = '这是一个美丽的景点，适合度假和放松。这里有清澈的湖水和茂密的森林，是远离城市喧嚣的理想去处。';
                break;
            case '2':
                title = '景点2';
                content = '这是一个历史名胜，适合了解当地文化。这里有古老的建筑和丰富的历史遗迹，是历史爱好者的天堂。';
                break;
            case '3':
                title = '景点3';
                content = 'This is a natural landscape, suitable for hiking and photography. Here are magnificent mountains and waterfalls, making it an excellent choice for outdoor activities.';
                break;
        }

        $('#detailTitle').text(title);
        $('#detailContent').text(content);
        $('#detailModal').modal('show');
    });
});