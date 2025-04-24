
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
                content = 'This is a historical landmark, suitable for understanding the local culture. Here, there are ancient buildings and abundant historical relics, making it a paradise for history enthusiasts.';
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