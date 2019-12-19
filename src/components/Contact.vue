<template>
  <div id="page-content" class="sub-page" style="position:relative; top: 50%">
    <div id="main-content" style="position:relative; top: 25%">
      <article>
        <div class="container">
          <div class="row heading wow fadeInDown text-center" >
            <div class="col-lg-12" >
              <h2 >Contact</h2>
              <hr>
              <div class="clearfix"></div>
              <p>Your suggestions are very important to us</p>
            </div>
          </div>
          <div class="row">
            <div class='embed-container maps'>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52.2460592!2d-7.1387045!3d37.5246781!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8091042b3386acd7%3A0x3b4a4cedc60363dd!2sWIT%2C+CorkRd%2C+WOTERFORD+WIT%2C+Hoa+K%E1%BB%B3!5e0!3m2!1svi!2s!4v1434016649434" width="1000px" height="450px" frameborder="0" style="border: 0"></iframe>
            </div>
            <br>
            <div class="col-md-4 box-item wow fadeInLeft">
              <h3>Contact Info</h3>
              <span></span>
              <p>3 hawthorn drive,Lacken Wood<br>
                Stephen Zhao</p>
              <p>+86 132 44531998 <br>
                +353 89 465 9621</p>
              <p>604318571@qq.com</p>
            </div>
            <div class="col-md-8 wow fadeInRight">
              <h3>Contact Form</h3>
              <form id="ff" name="form1" >
                <div class="row">
                  <div class="col-md-6">
                    <div class="form-group">
                      <input type="text" class="form-control input-lg" name="name" id="name" placeholder="Enter name" required="required" />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-group">
                      <input type="email" class="form-control input-lg" name="email" id="email" placeholder="Enter email" required="required" />
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-12">
                    <div class="form-group">
                      <input type="text" class="form-control input-lg" name="subject" id="subject" placeholder="Subject" required="required" />
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-12 text-center">
                    <div class="form-group">
                      <input type="text" class="form-control input-lg" name="message" id="Message" placeholder="Message" required="required" />
                    </div>
                    <el-button class="login_btn" @click.native="login" type="primary" round :loading="isBtnLoading">Submit</el-button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </article>
    </div>
  </div>
</template>

<script type="text/javascript" >
export default {
  name: 'Contact Us'
}

</script>

<style>
  .login_btn {
    width: 40%;
    font-size: 16px;
    background: -webkit-linear-gradient(left, #0d6f99, #04996f); /* Safari 5.1 - 6.0 */
    background: -o-linear-gradient(right,#0d6f99, #04996f); /* Opera 11.1 - 12.0 */
    background: -moz-linear-gradient(right,#0d6f99,#04996f); /* Firefox 3.6 - 15 */
    background: linear-gradient(to right,#0d6f99, #04996f); /* 标准的语法 */
    filter: brightness(1.2);
  }
  .position{
    position:relative; left: 5%;
  }
</style>
