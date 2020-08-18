import DayJS from 'dayjs'
import 'dayjs/locale/ja' // 日本語の表記を読み込む

DayJS.locale('ja') // ロケーションを日本に設定

export default (context, inject) => {
  inject('dayjs', DayJS)
}
