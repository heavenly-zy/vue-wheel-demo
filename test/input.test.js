const expect = chai.expect
import Vue from 'vue'
import Input from '../src/input'
import { eventNames } from 'cluster'

Vue.config.productionTip = false
Vue.config.devtools = false

// 测试驱动开发 TDD
describe('Input', () => {
    it('存在', () => {
        expect(Input).to.exist
    })
    describe('props', () => {
        const Constructor = Vue.extend(Input)
        let vm
        afterEach(() => {
            vm.$destroy()
        })
        it('接收 value', () => {
            vm = new Constructor({
                propsData: {
                    value: '123456'
                }
            }).$mount()
            const inputElement = vm.$el.querySelector('input')
            console.log(inputElement.outerHTML)
            expect(inputElement.value).to.equal('123456')
        })

        it('接收 disabled', () => {
            vm = new Constructor({
                propsData: {
                    disabled: true
                }
            }).$mount()
            const inputElement = vm.$el.querySelector('input')
            console.log(inputElement.outerHTML)
            expect(inputElement.disabled).to.equal(true)
        })

        it('接收 readonly', () => {
            vm = new Constructor({
                propsData: {
                    readonly: true
                }
            }).$mount()
            const inputElement = vm.$el.querySelector('input')
            console.log(inputElement.outerHTML)
            expect(inputElement.readOnly).to.equal(true)
        })

        it('接收 error', () => {
            vm = new Constructor({
                propsData: {
                    error: '你错了'
                }
            }).$mount()
            const useElement = vm.$el.querySelector('use')
            console.log(useElement.outerHTML)
            expect(useElement.getAttribute('xlink:href')).to.equal('#i-error')
            const errorMessage = vm.$el.querySelector('.errorMessage')
            expect(errorMessage.innerText).to.equal('你错了')
        })
    })
    describe('事件', () => {
        const Constructor = Vue.extend(Input)
        let vm
        afterEach(() => {
            vm.$destroy()
        })
        it('支持 change/input/focus/blur 事件', () => {
            ['change', 'input', 'focus', 'blur']
                .forEach((eventName) => {
                    vm = new Constructor({}).$mount()
                    const callback = sinon.fake();
                    vm.$on(eventName, callback)
                    let event = new Event(eventName)
                    Object.defineProperty(
                        event, 'target', {
                            value: {value: 'hello'}, enumerable: true
                        }
                    )
                    let inputElement = vm.$el.querySelector('input')
                    inputElement.dispatchEvent(event)
                    expect(callback).to.have.been.calledWith('hello')
                })
        })
    })
})


