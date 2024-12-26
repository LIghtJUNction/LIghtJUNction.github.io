// 这是网站的主JavaScript文件，用于实现网页的交互功能

document.addEventListener('DOMContentLoaded', function() {
    // 示例：当页面加载完成后，显示欢迎信息
    console.log('欢迎访问我的GitHub个人网页！');

    // 示例：为导航链接添加点击事件
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});