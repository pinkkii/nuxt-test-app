<template>
    <ul class="nav nav-tabs justify-content-between flex-nowrap mt-4 pt-2" id="medicinesTab" role="tablist">
        <li class="nav-item" role="descMedicines">
            <button class="nav-link active" id="description-tab" data-bs-toggle="tab" data-bs-target="#description"
                type="button" role="tab" aria-controls="description" aria-selected="true">ОПИС</button>
        </li>
        <li class="nav-item" role="descMedicines">
            <button class="nav-link" id="benefit-tab" data-bs-toggle="tab" data-bs-target="#benefit" type="button"
                role="tab" aria-controls="benefit" aria-selected="false">КОРИСТЬ</button>
        </li>
        <li class="nav-item" role="descMedicines">
            <button class="nav-link" id="ingredients-tab" data-bs-toggle="tab" data-bs-target="#ingredients"
                type="button" role="tab" aria-controls="ingredients" aria-selected="false">ІНГРЕДІЄНТИ</button>
        </li>
        <li class="nav-item" role="descMedicines">
            <button class="nav-link" id="applicationMethod-tab" data-bs-toggle="tab" data-bs-target="#applicationMethod"
                type="button" role="tab" aria-controls="applicationMethod" aria-selected="false">СПОСІБ
                ЗАСТОСУВАННЯ</button>
        </li>
    </ul>
    <div class="tab-content" id="medicinesTabContent">
        <div class="tab-pane fade show active" id="description" role="tabpanel" aria-labelledby="description-tab">
            <div class="mb-2 not-mobile-version">
                Комплекс EPA + DHA кислот і натуральних вітамінів А & D3 для здоров'я твоєї
                шкіри, волосся,зору, сну, міцних кісток, суглобів та імунітету.
            </div>
            <div class="mb-2 more-mobile">
                <p class="points mb-2" ref="points">
                    Комплекс EPA + DHA кислот і натуральних вітамінів А & D3 для здоров'я твоєї
                    шкіри...
                </p>
                <span class="collapse" id="collapseMore-1">
                    Комплекс EPA + DHA кислот і натуральних вітамінів А & D3 для
                    здоров'я твоєї
                    шкіри, волосся,зору, сну, міцних кісток, суглобів та імунітету.
                </span>
                <button @click="clickMoreDetails" ref="btnMore" class="btn btn-more" type="button"
                    data-bs-toggle="collapse" data-bs-target="#collapseMore-1" aria-expanded="true"
                    aria-controls="collapseMore-1">
                    Дізнатись більше
                </button>
            </div>
        </div>
        <div class="tab-pane fade" id="benefit" role="tabpanel" aria-labelledby="benefit-tab">
            <ul>
                <li>Покращують стан шкіри: борються з акне та сприяють її регенерації</li>
                <li>Зменшують випадіння волосся, стимулюють його ріст</li>
                <li>Підіймають настрій та полегшують симптоми депресії</li>
                <li>Зміцнюють імунітет: зменшують запальні процеси</li>
                <li>Поліпшують роботу гормонів, серця і ЦНС</li>
                <li>Зменшують болі в суглобах</li>
                <li>Покращують метаболізм і роботу ШКТ</li>
            </ul>
        </div>
        <div class="tab-pane fade" id="ingredients" role="tabpanel" aria-labelledby="ingredients-tab">
            <table class="table">
                <tbody>
                    <tr>
                        <th scope="row">Склад</th>
                        <td>100% риб'ячий жир з печінки тріски, желатин, гліцерин.</td>
                    </tr>
                    <tr>
                        <th scope="row">EPA / DHA</th>
                        <td>170 мг / 205 мг</td>
                    </tr>
                    <tr>
                        <th scope="row">Вітамін-А</th>
                        <td colspan="2">656 мкг 2187 МО</td>
                    </tr>
                    <tr>
                        <th scope="row">Вітамін-D3</th>
                        <td>5.2 мкг 210 МО</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="tab-pane fade" id="applicationMethod" role="tabpanel" aria-labelledby="applicationMethod-tab">
            <p class="mb-3">
                Для профілактики, дорослим і дітям від 11 років –
                <em>
                    <strong>
                        4 капсули на день
                    </strong>
                </em>
                , разом із їжею або одразу після. Бажано з іншими жирами <em>для кращого засвоєння</em>.
            </p>
            <p>
                <strong>
                    Курс прийому:
                </strong>
                2-3 місяці, після чого зробити перерву 1-2 місяці або перейти на Омега-3 із Тунця.
            </p>
        </div>
    </div>
</template>
  
<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const widthScreen = ref(0);
const btnMore = ref(null);
const points = ref(null);

function onResize() {
    widthScreen.value = window.innerWidth;
}

function clickMoreDetails() {
    btnMore.value.style.display = 'none';
    points.value.style.display = 'none';
}

onMounted(() => {
    onResize();
    window.addEventListener('resize', onResize);

})

onUnmounted(() => {
    window.removeEventListener('resize', onResize);
})
</script>
  
<style lang="scss" scoped>
.nav {
    max-width: 581px;
    border-bottom: 1px solid rgba(0, 40, 79, 0.3);
}

.nav-item button {
    padding: 0;
}

.nav-tabs .active {
    background-color: transparent;
    border-color: transparent;
    color: $blue;
    opacity: 1;
    border-bottom: 2px solid #00284F;
}

.nav-link {
    font-family: 'OnestBold', serif;
    font-size: 17px;
    line-height: 22px;
    color: $blue;
    opacity: 0.4;
}

.tab-content {
    margin-top: 12px;
}

.tab-pane {
    font-size: 18px;
    line-height: 28px;
}

table tr {
    border-bottom: 1px solid $blue;
}

.btn-more {
    display: none;
    border: none;
    background-color: transparent;
    font-size: 14px;
    line-height: 18px;
    padding: 0 0 4px 0;
    border-radius: 0;
    border-bottom: 1.5px solid $black;
}

.points,
.more-mobile {
    display: none;
}

@media only screen and (max-width: 1200px) {
    .nav {
        button {
            font-size: 15px;
        }
    }
}

@media only screen and (max-width: 575px) {
    .nav {
        button {
            font-size: 13px;
        }
    }

    .tab-pane {
        font-size: 16px;
    }
}

@media only screen and (max-width: 450px) {
    .not-mobile-version {
        display: none;
    }

    .nav {
        button {
            font-size: 11px;
        }
    }

    .btn-more,
    .points,
    .more-mobile {
        display: block;
    }
}
</style>
