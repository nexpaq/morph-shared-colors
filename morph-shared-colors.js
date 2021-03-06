var $_documentContainer = document.createElement('template');

$_documentContainer.innerHTML = /*html*/`
<custom-style>
  <style>
    /* Set CSS custom properties */
    html { 
      /* iOS */
      --polymorph-ios-blue-color: #007aff;
      --polymorph-ios-blue-color--background: rgba(0, 122, 255, 0.15);
      
      --polymorph-ios-red-color: #ff3b30;
      --polymorph-ios-red-color--background: rgba(255, 59, 48, 0.15);

      --polymorph-ios-green-color: #4cd964;
      --polymorph-ios-green-color--background: rgba(76, 217, 100, 0.15);

      --polymorph-ios-gray-color: #8e8e93;
      --polymorph-ios-gray-color--background: rgba(142, 142, 147, 0.15);

      /* Android */
      --polymorph-android-blue-color: #2196f3;
      --polymorph-android-blue-color--background: #0D82DF;

      --polymorph-android-red-color: #f44336;
      --polymorph-android-red-color--background: #E02F22;

      --polymorph-android-green-color: #4caf50;
      --polymorph-android-green-color--background: #389B3C;

      --polymorph-android-gray-color: #8e8e93;
      --polymorph-android-gray-color--background: #7A7A7F;

        --morph-shared-colors-connected: deepskyblue;
      }
    </style>
  </custom-style>
  `;

document.head.appendChild($_documentContainer.content);
