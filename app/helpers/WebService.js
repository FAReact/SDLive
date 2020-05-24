import {ENDPOINT} from '../api/Endpoint'
import NetworkHelper from './NetworkHelper'

function WService() {
    this.url = ENDPOINT
  }

  WService.prototype.makeUrl = function (resource) {
    var url = this.url + resource
    return url
  }

  WService.prototype.signUp = function (name,email,birthday,user_type,password) {
    return NetworkHelper.requestPost(this.makeUrl('/user/register'), { name,email,birthday,user_type,password})
  }

  WService.prototype.forgotPassword = function (email) {
    return NetworkHelper.requestPost(this.makeUrl('/mail/resetPasswordRequest'), { email })
  }
  
  WService.prototype.signIn = function (email, password) {
    return NetworkHelper.requestPost(this.makeUrl('/user/login'), { email, password })
  }

  WService.prototype.profile = function (id) {
    return NetworkHelper.requestGet(this.makeUrl(`users/profile/${id}`))
  }

  WService.prototype.initData = function () { 
    return NetworkHelper.requestGet(this.makeUrl('/initial_data'))
  }
  WService.prototype.getEvent = function () { 
    return NetworkHelper.requestGet(this.makeUrl('/event/mycreated_event'))
  }
  WService.prototype.profileUpgrade = function (name,image,email,password,birthday,country,city,bio,interests,facebook,twitter,instagram,profile_picture){
    return NetworkHelper.requestFormDataPost(this.makeUrl('/user/update_profile'),{name,image,email,password,birthday,country,city,bio,interests,facebook,twitter,instagram,profile_picture})
  }
  WService.prototype.createEvent = function(data){
    return NetworkHelper.requestFormDataPost(this.makeUrl('/event/create'),data)
  }
  WService.prototype.buyTicket = function(event_id,count){
    return NetworkHelper.requestPost(this.makeUrl('/ticket/buy'),{event_id,count})
  }

  WService.prototype.sendTicketGift = function(event_id,receiver_email,count){
    return NetworkHelper.requestPost(this.makeUrl('/ticket/send_gift'),{event_id,receiver_email,count})
  }

  WService.prototype.buyCheer = function(package_id){

    return NetworkHelper.requestPost(this.makeUrl('/cheers/buy'),{package_id})
  }

  WService.prototype.removeEvent = function(id){
    console.log("delete id")
    console.log(id)
    return NetworkHelper.requestPost(this.makeUrl(`/event/delete/${id}`))
  }
  module.exports = WService