const tabs = document.querySelectorAll('.tab');
const panels = document.querySelectorAll('.panel')


//Tabs menu event listener

tabs.forEach((tab) => tab.addEventListener('click', onTabClick))

function onTabClick(e) {
    tabs.forEach((tab) => {
        tab.children[0].classList.remove(
            'border-softRed',
            'border-b-4',
            'md:border-b-0'

        )
    })
}