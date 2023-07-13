$(function () {
    $.getUrlParam = function (name) {
        const reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
        const r = window.location.search.substr(1).match(reg);
        return r != null ? unescape(r[2]) : null
    }

    $(document).ready(() => {
        const products = getProducts();
        const type= $.getUrlParam('type');
        if (type) {
            $('.desc').text(products.list[type].title);
            $('.sub-title').text(products.list[type].subTitle);
            getProductList(products.list[type].products)
        }
    })

})

function getProductList(products) {
    let html = '';
    for (let item of products) {
        html += `<div class="fadeInLeft" data-wow-delay="100ms">`;
        html += `<div class="project-one__single">`;
        html += `<p class="project-one__tagline" style="color: #af260e">${item.tag}</p>`;
        html += `<hr/>`;
        html += `<div class="project-one__img">`;
        html += `<img src="${item.img}" alt="">`;
        html += `</div>`;
        html += `<div class="project-one__content" onClick="location.href='project-details.html?id=${item.id}';" style="cursor:pointer;">`;
        html += `<p class="project-one__desc">${item.desc}</p>`;
        html += `<h2 class="project-one__title">${item.name}</h2>`;
        html += `<div class="project-one__arrow"><img src="../assets/static/img/product/right.svg" alt=""></div></div></div></div>`;
    }
    $('.productsHtml').html(html);
}

function getProducts() {
    return {
        list: {
            pos: {
                title: 'ECR POS & Customer Facing Device',
                subTitle: 'Secure Android platform - Integrated POS for ECR POS & Customer Facing Device',
                products: [
                    {
                        id: 'xCE_E200I',
                        name: 'xCE_E200I',
                        tag: 'ECR POS',
                        img: '../assets/static/img/product/xCE_E200I.jpg',
                        desc: 'Secure Android ECR POS'
                    },
                    {
                        id: 'xCL_AT170CFD',
                        name: 'xCL_AT170CFD',
                        tag: 'Customer Facing Payment Device',
                        img: '../assets/static/img/product/xCL_AT170CFD.jpg',
                        desc: '7” Customer Facing Device (PCI6/Android12)'
                    },
                    {
                        id: 'xCL_E200CP',
                        name: 'xCL_E200CP',
                        tag: 'Customer Facing Payment Device',
                        img: '../assets/static/img/product/xCL_E200CP.jpg',
                        desc: 'Secure Android Customer Facing Payment Terminal'
                    },
                    {
                        id: 'xCL_AP-10',
                        name: 'xCL_AP-10',
                        tag: 'Customer Facing Payment Device',
                        img: '../assets/static/img/product/xCL_AP-10.jpg',
                        desc: '4" Desktop Payment Terminal (PCI5/Android6)'
                    },
                    {
                        id: 'xCL_RP-10',
                        name: 'xCL_RP-10',
                        tag: 'Customer Facing Payment Device',
                        img: '../assets/static/img/product/xCL_RP-10.jpg',
                        desc: 'All In One PINPAD'
                    },
                    {
                        id: 'xCL_E35',
                        name: 'xCL_E35',
                        tag: 'Customer Facing Payment Device',
                        img: '../assets/static/img/product/xCL_E35.jpg',
                        desc: 'All in One Mobile Payment Device'
                    }
                ]
            },
            handheld: {
                title: 'Handheld & Desktop Use Case',
                subTitle: 'Secure Android platform - Integrated POS for Handheld & Desktop use cases',
                products: [
                    {
                        id: 'xCL_AT150E',
                        name: 'xCL_AT150E',
                        tag: 'Handheld & Desktop Terminal',
                        img: '../assets/static/img/product/xCL_AT150E.jpg',
                        desc: '5" Smart POS Terminal (PCI6/Android12)'
                    },
                    {
                        id: 'xCL_AT150ED',
                        name: 'xCL_AT150ED',
                        tag: 'Handheld & Desktop Terminal',
                        img: '../assets/static/img/product/xCL_AT150ED.jpg',
                        desc: '5" Smart POS Desktop Terminal (PCI6/Android12)'
                    },
                    {
                        id: 'xCL_AT150EP',
                        name: 'xCL_AT150EP',
                        tag: 'Handheld & Desktop Terminal',
                        img: '../assets/static/img/product/xCL_AT150EP.jpg',
                        desc: '5" Smart PINPAD (PCI6/Android12)'
                    },
                    {
                        id: 'xCL_AT170E',
                        name: 'xCL_AT170E',
                        tag: 'Handheld & Desktop Terminal',
                        img: '../assets/static/img/product/xCL_AT170E.jpg',
                        desc: '7" Smart POS Terminal (PCI6/Android12)'
                    },
                    {
                        id: 'xCL_AT-100R',
                        name: 'xCL_AT-100R',
                        tag: 'Handheld & Desktop Terminal',
                        img: '../assets/static/img/product/xCL_AT-100R.jpg',
                        desc: '4" Handheld Payment Terminal (PCI5/Android8)'
                    },
                    {
                        id: 'xCL_AT-150R',
                        name: 'xCL_AT-150R',
                        tag: 'Handheld & Desktop Terminal',
                        img: '../assets/static/img/product/xCL_AT-150R.jpg',
                        desc: '5" Handheld Payment Terminal (PCI5/Android8)'
                    },
                    {
                        id: 'xCL_AT-170R',
                        name: 'xCL_AT-170R',
                        tag: 'Handheld & Desktop Terminal',
                        img: '../assets/static/img/product/xCL_AT-170R.jpg',
                        desc: '7" Handheld Payment Terminal (PCI5/Android8)'
                    },
                    {
                        id: 'xCL_AP-10',
                        name: 'xCL_AP-10',
                        tag: 'Handheld & Desktop Terminal',
                        img: '../assets/static/img/product/xCL_AP-10.jpg',
                        desc: '4" Desktop Payment Terminal (PCI5/Android6)'
                    },
                    {
                        id: 'XC-60-EF/-CF',
                        name: 'XC-60-EF/-CF',
                        tag: 'Charger Stand & Communication HUB',
                        img: '../assets/static/img/product/XC-60-EF-CF.jpg',
                        desc: 'Charger & Communication Hub (AT-150E&AT-100E)'
                    },
                    {
                        id: 'XC-70',
                        name: 'XC-70',
                        tag: 'Charger Stand & Communication HUB',
                        img: '../assets/static/img/product/XC-70.jpg',
                        desc: 'Charger & Communication Hub for xCL_AT-170'
                    },
                    {
                        id: 'XC-60',
                        name: 'XC-60',
                        tag: 'Charger Stand & Communication HUB',
                        img: '../assets/static/img/product/XC-60.jpg',
                        desc: 'Charger & Communication Hub for xCL_AT-100/150'
                    }
                ]
            },
            payment: {
                title: 'Unattended Outdoor Payment Solution',
                subTitle: 'Secure Android platform - Integrated POS for Unattended Outdoor Payment Modules / Terminal / Kiosk',
                products: [
                    {
                        id: 'xCL_AT150U',
                        name: 'xCL_AT150U',
                        tag: 'Unattended Outdoor Payment Terminal',
                        img: '../assets/static/img/product/xCL_AT150U.jpg',
                        desc: '5” Smart UPT (PCI6/Android12)'
                    },
                    {
                        id: 'xCL_T305',
                        name: 'xCL_T305',
                        tag: 'Unattended Outdoor Payment Terminal',
                        img: '../assets/static/img/product/xCL_T305.jpg',
                        desc: 'Unattended Outdoor Payment Terminal (PCI5/Android8'
                    },
                    {
                        id: 'xCL_AT-150-R3-ATEXII',
                        name: 'xCL_AT-150-R3-ATEXII',
                        tag: 'Outdoor Handheld Payment Terminal',
                        img: '../assets/static/img/product/xCL_AT-150-R3-ATEXII.jpg',
                        desc: '5" Handheld Outdoor Payment Terminal (PCI5/Android'
                    },
                    {
                        id: 'xNFC_C150-SE',
                        name: 'xNFC_C150-SE',
                        tag: 'PCI P2PE UPT Module',
                        img: '../assets/static/img/product/xNFC_C150-SE.jpg',
                        desc: 'Secure Unattended Outdoor Contactless Reader'
                    },
                    {
                        id: 'SUD-12SUD-7',
                        name: 'SUD-12 / SUD-7',
                        tag: 'PCI P2PE UPT Module',
                        img: '../assets/static/img/product/SUD-12SUD-7.jpg',
                        desc: 'Secure Unattended Outdoor Display'
                    },
                    {
                        id: 'SPED5',
                        name: 'SPED5',
                        tag: 'PCI P2PE UPT Module',
                        img: '../assets/static/img/product/SPED5.jpg',
                        desc: 'Secure Unattended Outdoor Pin Entry Device'
                    },
                    {
                        id: 'xNFC_C150-S',
                        name: 'xNFC_C150-S',
                        tag: 'PCI P2PE UPT Module',
                        img: '../assets/static/img/product/xNFC_C150-S.jpg',
                        desc: 'Secure Unattended Outdoor Contactless Reader'
                    },
                    {
                        id: 'P95',
                        name: 'P95',
                        tag: 'PCI P2PE UPT Module',
                        img: '../assets/static/img/product/P95.jpg',
                        desc: 'Secure Unattended Outdoor Hybrid Reader'
                    },
                    {
                        id: 'CK-1',
                        name: 'CK-1',
                        tag: 'KIOSK',
                        img: '../assets/static/img/product/CK-1.jpg',
                        desc: 'Self-Service Cloud Kiosk'
                    },
                    {
                        id: 'TP48CSM',
                        name: 'TP48CSM',
                        tag: 'Others',
                        img: '../assets/static/img/product/TP48CSM.jpg',
                        desc: 'Thermal Printer Module'
                    },
                    {
                        id: 'M9801',
                        name: 'M9801',
                        tag: 'Others',
                        img: '../assets/static/img/product/M9801.jpg',
                        desc: 'Motorized Hybrid Reader'
                    }
                ]
            },
            mpos: {
                title: 'mPOS & Peripheral',
                subTitle: 'mPOS/Printer/Payment Hub',
                products: [
                    {
                        id: 'xCL_E35',
                        name: 'xCL_E35',
                        tag: 'mPOS',
                        img: '../assets/static/img/product/xCL_E35.jpg',
                        desc: 'All in One Mobile Payment Device'
                    },
                    {
                        id: 'xCE_TP72-HUB',
                        name: 'xCE_TP72-HUB',
                        tag: 'Payment Hub',
                        img: '../assets/static/img/product/xCE_TP72-HUB.jpg',
                        desc: 'HUB POS Printer'
                    },
                    {
                        id: 'xCE_TP72-SAPrinter',
                        name: 'xCE_TP72-SA Printer',
                        tag: 'Printer',
                        img: '../assets/static/img/product/xCE_TP72-SA Printer.jpg',
                        desc: 'Standalone Thermal Printer'
                    }
                ]
            }
        }
    }
}
