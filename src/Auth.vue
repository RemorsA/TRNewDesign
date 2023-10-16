<script setup>
    import { ref } from 'vue'
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

    const authFormRef = ref()
	const authFormRules = ref({
		login: [{ required: true, message: 'Вы не указали логин' }],
		pass: [{ required: true, message: 'Вы не указали пароль' }]
	})
	let authForm = ref({
		login: '',
		pass: ''
	})
	const regFormRef = ref()
	const regFormRules = ref({
		name: [{ required: true, message: 'Вы не уазали свое имя' }],
		phone: [{ min: 10, max: 10, required: true, message: 'Вы не указали свой телефон' }]
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

				ElNotification({
					type: 'success',
					message: 'Вы вошли в аккаунт',
					showClose: true,
					customClass: 'el-notification-custom'
				})

                // store.commit('routerGo', 'news')

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

                // store.commit('routerGo', 'news')

				ref.resetFields()
			}
		})
	}
</script>

<template>
    <div class="auth-container">
        <el-tabs class="tabs">
            <el-tab-pane label="Войти в аккаунт">
                <el-form
                    label-width="100px"
                    :model="authForm"
                    :rules="authFormRules"
                    ref="authFormRef"
                >
                    <el-form-item
                        label="Логин"
                        ref="login"
                        prop="login"
                    >
                        <el-input
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
                        <el-input
                            v-model="authForm.pass"
                            placeholder="Ваш пароль"
                            prefix-icon="More"
                            show-password
                            clearable
                        ></el-input>
                    </el-form-item>

                    <el-form-item>
                        <el-button
                            icon="Right"
                            @click="loginToAccount(authFormRef)"
                            style="width: 100%"
                        >
                            Войти
                        </el-button>
                    </el-form-item>
                </el-form>
            </el-tab-pane>

            <el-tab-pane label="Зарегестрироваться">
                <el-form
                    label-width="100px"
                    :model="regForm"
                    :rules="regFormRules"
                    ref="regFormRef"
                >
                    <el-form-item
                        label="Имя"
                        ref="name"
                        prop="name"
                    >
                        <el-input
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
                        <el-input
                            v-model="regForm.phone"
                            placeholder="+7 ( ___ ) ___-__-__"
                            prefix-icon="Cellphone"
                            clearable
                            v-mask="'+7 ( 999 ) 999-99-99'"
                        ></el-input>
                    </el-form-item>

                    <el-form-item>
                        <el-button
                            icon="Right"
                            @click="register(regFormRef)"
                            style="width: 100%"
                        >
                            Зарегестрироваться
                        </el-button>
                    </el-form-item>
                </el-form>
            </el-tab-pane>
        </el-tabs>
    </div>
</template>

<style lang="scss" scoped>
    .auth-container {
        width: 100vw;
        height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;

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
            // filter: brightness(0.1);
            filter: blur(5px);
            transform: scale(1.1);
        }

        .tabs {
            width: 100%;
            padding: 0 700px;
            z-index: 1000;
            background: red;
        }
    }
</style>