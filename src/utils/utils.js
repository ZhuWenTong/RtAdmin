const utils = {
    formatDate (time) {
        if (!time) return ''
        let date = new Date(time)
        let month = this.joinZero(date.getMonth() + 1)
        let day = this.joinZero(date.getDate())
        let hour = this.joinZero(date.getHours())
        let minutes = this.joinZero(date.getMinutes())
        let seconds = this.joinZero(date.getSeconds())
        return `${date.getFullYear()}-${month}-${day} ${hour}:${minutes}:${seconds}`
    },
    joinZero (val) {
        return val < 10 ? '0' + val : val
    }
}
export default utils
