/**
 * Created by John on 2016/4/29.
 */
var elForm, elSelectPackage, elPackageHint, elTerms, elTermsHint;  //声明变量
elForm          = document.getElementById('formSignUp');
elSelectPackage = document.getElementById('package');        
elPackageHint   = document.getElementById('packageHint');
elTerms         = document.getElementById('terms');
elTermsHint     = document.getElementById('termsHint');

function packageHint() {
    var pack = this.options[this.selectedIndex].value; //选择的操作
    if (pack === 'monthly'){
        elPackageHint.innerHTML = '年费会员一年省10块!';
    }
    else {
        elPackageHint.innerHTML = '理智的选择';
    }
}

function checkTerms(event) {
    if (!elTerms.checked){
        elTermsHint.innerHTML = '必须同意条款';
        event.preventDefault(); //阻止链接把用户带到新界面
    }
}

//创建事件监听器：submit调用checkTerms,change套餐调用packageHint
elForm.addEventListener('submit', checkTerms, false);

elSelectPackage.addEventListener('change', packageHint, false );