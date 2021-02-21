<!-- TEMPLATE -->

<template>
  
  <h1>Form <span>VUE</span>lidation</h1>

  <transition name="toast">
    <div v-if="toast" class="toast-container">
      <p>{{ toastMessage }}</p>
    </div>
  </transition>

  <form id="form" @submit.prevent="validateInputs">
    
    <transition name="input-name" appear>
      <div class="form-group">
        <Validation :inputName="name" :labelName="nameTitle" :id="'name'">
          <input 
            type="text" 
            required 
            v-model="name"> 
        </Validation>
      </div>
    </transition>
    
    <transition name="input-number" appear>
      <div class="form-group">
        <Validation :inputName="number" :labelName="numberTitle" :id="'number'"> 
          <input 
            type="number"
            required 
            v-model="number">
        </Validation> 
      </div>
    </transition>
    
    <transition name="input-postcode" appear>
      <div class="form-group">
        <Validation :inputName="postcode" :labelName="postcodeTitle" :id="'postcode'">
          <input 
            type="number"
            required 
            v-model="postcode">
        </Validation>
      </div>
    </transition>

    <transition name="input-email" appear>
      <div class="form-group">
        <Validation :inputName="email" :labelName="emailTitle" :id="'email'">
          <input 
            type="email" 
            required 
            v-model="email">
        </Validation>
      </div>
    </transition>
    
    <transition name="input-password" appear>
      <div class="form-group">
        <Validation :inputName="password" :labelName="passwordTitle" :id="'password'">
          <input 
            type="password"
            required 
            v-model="password">
        </Validation>
      </div>
    </transition>

    <transition name="input-password-two" appear>
      <div class="form-group">
        <Validation :inputName="passwordTwo" :labelName="passwordTwoTitle" :id="'passwordTwo'" :pass="password">
          <input 
            type="password"
            required 
            v-model="passwordTwo">
        </Validation>
      </div>
    </transition>
    
    <button type="submit">Submit</button>

  </form>

  <transition name="results">
    <div v-if="isValid" class="results-container">
      <p><span>Name:</span> {{ name }}</p>
      <p><span>Number:</span> {{ number }}</p>
      <p><span>Postcode:</span> {{ postcode }}</p>
      <p><span>Email:</span> {{ email }}</p>
      <p><span>Password:</span> {{ password }}</p>
    </div>
  </transition>

</template> 

<!-- SCRIPT -->
<script type="text/javascript" src="./scripts/form.js"></script>

<!-- STYLE -->
<style src="./styles/css/form.css"></style>