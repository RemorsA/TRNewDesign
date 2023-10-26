<script setup>
    import { ref, computed } from 'vue'
    import store from './store';
    import Inputmask from 'inputmask'
    import { ElNotification } from 'element-plus'

    const vMask = {
        updated: (el, binding) => {
            if (binding.value) {
                let mask = Inputmask(binding.value).mask(el.getElementsByTagName('INPUT')[0])

                regForm.value.phone = mask.unmaskedvalue()
            }
        }
    }

    const routerGo = (path) => computed(() => {
        return store.commit('routerGo', path) 
    }).value

    const authFormRules = ref({
		login: [{ required: true, message: 'Вы не указали логин' }],
		pass: [{ required: true, message: 'Вы не указали пароль' }]
	})
    const regFormRules = ref({
		name: [{ required: true, message: 'Вы не уазали свое имя' }],
		phone: [{ min: 10, max: 10, required: true, message: 'Вы не указали свой телефон' }]
	})

    const authFormRef = ref()
    const regFormRef = ref()

	let authForm = ref({
		login: '',
		pass: ''
	})
	let regForm = ref({
		name: '',
		phone: ''
	})

    function loginToAccount(ref) {
		ref.validate(valid => {
			if (valid) {
                store.dispatch('setAuth', {
                    login: authForm.value.login,
                    pass: authForm.value.pass
                })

                routerGo('/home/news')

				ref.resetFields()
			}
		})
	}

	function register(ref) {
		ref.validate(valid => {
			if (valid) {
				ElNotification({
					type: 'success',
					message: 'Запрос на регистрацию отправлен. Скоро мы с вами свяжемся',
					duration: 0,
					showClose: true,
					customClass: 'el-notification-custom'
				})

                routerGo('/home/news')

				ref.resetFields()
			}
		})
	}
</script>

<template>
    <div class="auth-container">
        <div class="tabs-form__logo">
            <div class="logo-desc">
                <el-image class="logo" src="/logo-stroke.png"></el-image>

                <el-carousel class="desc-carousel"
                    direction="vertical"
                    :interval="2000"
                    indicator-position="none"
                >
                    <el-carousel-item
                        v-for="(record, index) in [
                            'В ногу со временем',
                            'Лучший интернет магазин',
                            'Интернет магазин запасных частей',
                            'Один из ведущих поставщиков',
                            'За 30 лет работы компания заслужила отличную репутацию'
                        ]"
                        :key="index"
                    >
                        {{ record }}
                    </el-carousel-item>
                </el-carousel>
            </div>

            <el-tabs class="tabs">
                <el-tab-pane label="Войти в аккаунт">
                    <el-form class="tab-auth__form"
                        label-width="80px"
                        :model="authForm"
                        :rules="authFormRules"
                        ref="authFormRef"
                    >
                        <el-form-item
                            label="Логин"
                            ref="login"
                            prop="login"
                        >
                            <el-input class="tab-auth__form-input"
                                v-model="authForm.login"
                                placeholder="Ваш логин"
                                prefix-icon="User"
                                clearable
                            ></el-input>
                        </el-form-item>

                        <el-form-item
                            label="Пароль"
                            ref="pass"
                            prop="pass"
                        >
                            <el-input class="tab-auth__form-input"
                                v-model="authForm.pass"
                                placeholder="Ваш пароль"
                                prefix-icon="More"
                                show-password
                                clearable
                            ></el-input>
                        </el-form-item>

                        <el-form-item>
                            <el-button class="tab-auth__form-button"
                                icon="Right"
                                @click="loginToAccount(authFormRef)"
                                style="width: 100%"
                                plain
                                type="primary"
                            >
                                Войти
                            </el-button>
                        </el-form-item>
                    </el-form>
                </el-tab-pane>

                <el-tab-pane label="Зарегестрироваться">
                    <el-form class="tab-auth__form"
                        label-width="80px"
                        :model="regForm"
                        :rules="regFormRules"
                        ref="regFormRef"
                    >
                        <el-form-item
                            label="Имя"
                            ref="name"
                            prop="name"
                        >
                            <el-input class="tab-auth__form-input"
                                v-model="regForm.name"
                                placeholder="Введите ваше имя"
                                prefix-icon="User"
                                clearable
                            ></el-input>
                        </el-form-item>

                        <el-form-item
                            label="Телефон"
                            ref="phone"
                            prop="phone"
                        >
                            <el-input class="tab-auth__form-input"
                                v-model="regForm.phone"
                                placeholder="+7 ( ___ ) ___-__-__"
                                prefix-icon="Cellphone"
                                clearable
                                v-mask="'+7 ( 999 ) 999-99-99'"
                            ></el-input>
                        </el-form-item>

                        <el-form-item>
                            <el-button class="tab-auth__form-button"
                                icon="Right"
                                @click="register(regFormRef)"
                                style="width: 100%"
                                plain
                                type="primary"
                            >
                                Зарегестрироваться
                            </el-button>
                        </el-form-item>
                    </el-form>
                </el-tab-pane>
            </el-tabs>
        </div>
    </div>
</template>

<style lang="scss">
    .tabs
    .el-tabs__header
    .el-tabs__nav-wrap
    .el-tabs__nav-scroll
    .el-tabs__nav
    .el-tabs__item {
        color: white !important;

        &.is-active {
            color: var(--el-color-primary) !important;
        }
    }

    .tab-auth__form
    .el-form-item
    .el-form-item__label {
        color: white !important;
    }

    .tab-auth__form-input {
        --el-input-bg-color: var(--el-bg-color);
    }

    .tab-auth__form-button {
        --el-button-bg-color: var(--el-bg-color)
    }

    .logo-carousel
    .el-carousel__container
    .el-carousel__item
    .is-animating
    {
        transition: 2s ease-in-out !important;
    }
</style>

<style lang="scss" scoped>
    .auth-container {
        width: 100vw;
        height: 100vh;

        &::after {
            content: '';
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-image: url('https://media.istockphoto.com/id/1397763867/ru/%D1%84%D0%BE%D1%82%D0%BE/%D0%BA%D1%80%D1%83%D0%BF%D0%BD%D1%8B%D0%B9-%D0%BF%D0%BB%D0%B0%D0%BD-%D0%B1%D1%83%D0%BB%D1%8C%D0%B4%D0%BE%D0%B7%D0%B5%D1%80%D0%B0-%D0%BA%D0%BE%D0%BF%D0%B0%D1%8E%D1%89%D0%B5%D0%B3%D0%BE-%D0%B7%D0%B5%D0%BC%D0%BB%D1%8E-%D0%B8-%D1%83%D0%B4%D0%B0%D0%BB%D1%8F%D1%8E%D1%89%D0%B5%D0%B3%D0%BE-%D0%BF%D0%B5%D1%81%D0%BE%D0%BA-%D0%B4%D0%BB%D1%8F-%D1%86%D0%B5%D0%BB%D0%B5%D0%B9-%D0%B7%D0%B5%D0%BC%D0%BB%D1%8F%D0%BD%D1%8B%D1%85-%D1%80%D0%B0%D0%B1%D0%BE%D1%82.jpg?s=1024x1024&w=is&k=20&c=a9hNVegZkFEsmSHrY5TtrFu3-TNSEQxO6URy9MNQL9U=');
            background-repeat: no-repeat;
            background-size: cover;
            transform: scale(1.1);
            filter: blur(5px) brightness(0.5);
            z-index: -1;
        }

        .tabs-form__logo {
            max-width: 600px;
            margin: auto;
            width: 100%;
            height: 100%;
            padding: 20px;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;

            @media screen and (max-width: 768px) {
                padding: 10px;
            }

            .logo-desc {
                width: 100%;
                display: flex;
                align-items: flex-start;
                justify-content: center;
                gap: 20px;
                flex-wrap: wrap;

                .logo {
                    width: 250px;
                }

                .desc-carousel {
                    height: 53px;
                    width: 290px;
                    color: white;

                    @media screen and (max-width: 600px) {
                        width: 100%;
                        text-align: center;
                    }
                }
            }

            .tabs {
                width: 100%;
                margin-top: 20px;
            }
        }
    }
</style>