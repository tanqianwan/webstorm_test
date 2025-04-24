document.addEventListener('DOMContentLoaded', function() {
    // 获取URL参数
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id');

    // 模拟景点数据
    const spots = {
        1: {
            title: '景点1',
            image: '../images/image1.jpg',
            description: '这是一个美丽的景点，适合度假和放松。这里有清澈的湖水和茂密的森林，是远离城市喧嚣的理想去处。',
            features: ['清澈的湖水', '茂密的森林', '宁静的环境', '丰富的野生动植物'],
            address: '地址1',
            hours: '09:00 - 17:00',
            price: '¥50/人'
        },
        2: {
            title: '景点2',
            image: '../images/image2.jpg',
            description: '这是一个历史名胜，适合了解当地文化。这里有古老的建筑和丰富的历史遗迹，是历史爱好者的天堂。',
            features: ['古老的建筑', '历史遗迹', '文化展览', '博物馆'],
            address: '地址2',
            hours: '08:30 - 18:00',
            price: '¥80/人'
        },
        3: {
            title: '景点3',
            image: '../images/image3.jpg',
            description: '这是一个自然风光，适合徒步和摄影。这里有壮观的山脉和瀑布，是户外活动的绝佳选择。',
            features: ['壮观的山脉', '瀑布', '徒步路线', '摄影胜地'],
            address: '地址3',
            hours: '全天开放',
            price: '¥60/人'
        }
    };

    // 获取景点数据
    const spot = spots[id];

    if (spot) {
        // 填充景点详情
        document.getElementById('detailTitle').textContent = spot.title;
        document.getElementById('detailImage').src = spot.image;
        document.getElementById('detailDescription').textContent = spot.description;
        document.getElementById('detailAddress').textContent = spot.address;
        document.getElementById('detailHours').textContent = spot.hours;
        document.getElementById('detailPrice').textContent = spot.price;

        // 填充特色列表
        const featuresList = document.getElementById('detailFeatures');
        spot.features.forEach(feature => {
            const li = document.createElement('li');
            li.className = 'list-group-item';
            li.textContent = feature;
            featuresList.appendChild(li);
        });
    } else {
        // 如果找不到景点，显示错误信息
        document.getElementById('detailTitle').textContent = '景点未找到';
        document.getElementById('detailDescription').textContent = '抱歉，找不到该景点的信息。';
    }

    // 返回按钮事件
    document.getElementById('backButton').addEventListener('click', function() {
        window.location.href = '../index.html';
    });
});