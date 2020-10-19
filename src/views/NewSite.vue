<template>
  <div class="site">
    <mt-header>
      <router-link to="/site" slot="left">
        <mt-button  icon="back" >
        </mt-button>
      </router-link>
    </mt-header>
    <div >
      收货地址
    </div>
    <div class='site-add'>
      <table>
        <tr>
          <td>收货人</td>
          <td>
            <input type="text" placeholder="姓名">
          </td>
        </tr>
        <tr>
          <td>联系方式</td>
          <td>
            <select name="" id="">
              <option value="">+86</option>
            </select>
            <input type="text" placeholder="手机号码">
          </td>
        </tr>
        <tr>
          <td>所在地区</td>
          <td>
            <input type="text" placeholder="选择所在地区">
          </td>
        </tr>
        <tr>
          <td style="">详细地址</td>
          <td>
           <textarea name="" id="" cols="20" rows="3" placeholder="详细地址需填写楼栋楼层或房间号信息"></textarea>
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>
<style  scoped>
 .site :nth-child(2){
   text-align:center;
  }
  .site input {
    border: none;
    background-color: rgb(250, 250, 250);
  }
  .site select {
    border: none;
  }
  .site-add table tr {
    margin-top:10px;
    border-bottom:1px solid #ccc;
    font-size:14px
  }
  .site-add table tr td{
    padding: 15px 0  5px 10px;
  }
  .site-add table tr :nth-child(2){
    text-align:left;
  }
  .site-add table textarea{
    margin-left: 0px;
  }
</style>