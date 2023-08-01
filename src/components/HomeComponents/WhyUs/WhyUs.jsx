import React from "react";
import { useTranslation } from "react-i18next";
import './WhyUs.css'

const WhyUs = () => {
  const { t } = useTranslation();

  return (
    <div className="why-us-container">
      <h1>{t("home.why-us.title")}</h1>
      <p>{t("home.why-us.text")}</p>
      <section className="why-us-elements-container">
        <div className="why-us-element">
          <svg
            width="84"
            height="84"
            viewBox="0 0 84 84"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M82.6001 75.4447H78.4001V49.2426C78.4001 48.4814 77.7716 47.8636 76.9987 47.8649C76.5422 47.8649 76.1152 48.0842 75.8535 48.4523L56.2534 76.0336C55.811 76.6584 55.965 77.5175 56.5993 77.9547C56.8331 78.1159 57.1131 78.2029 57.4001 78.2029H75.6V82.3401C75.6 83.1012 76.2272 83.7191 77 83.7191C77.7727 83.7191 78.3999 83.1012 78.3999 82.3401V78.2029H82.5999C83.3726 78.2029 83.9999 77.5851 83.9999 76.8239C84 76.0625 83.3728 75.4447 82.6001 75.4447ZM75.6 53.6169V75.4447H60.0881L75.6 53.6169Z"
              fill="#ECB365"
            />
            <path
              d="M57.4001 80.9609H40.8255L56.2352 63.0868C56.2702 63.0454 56.3025 63.0026 56.3332 62.9585C59.2326 58.7316 58.2666 53.01 54.1352 49.9346C49.112 46.3793 42.1134 47.5088 38.5042 52.4568C37.1364 54.3323 36.3999 56.5858 36.3999 58.8956C36.3999 59.6568 37.0271 60.2746 37.7998 60.2746C38.5726 60.2746 39.1998 59.6568 39.1998 58.8956C39.1998 54.3255 42.9603 50.6213 47.5983 50.6198C49.3567 50.6198 51.0704 51.1631 52.4997 52.174C55.3934 54.3585 56.0682 58.3812 54.0397 61.3655L36.7333 81.4478C36.2335 82.0285 36.3049 82.8986 36.8942 83.3908C37.1477 83.6032 37.4683 83.7191 37.8 83.7191H57.4001C58.1728 83.7191 58.8 83.1012 58.8 82.3401C58.8 81.5787 58.1728 80.9609 57.4001 80.9609Z"
              fill="#ECB365"
            />
            <path
              d="M37.8308 74.0919C37.8602 73.3307 37.2568 72.6907 36.4841 72.6618C18.2196 71.9943 3.56016 57.579 2.84895 39.589H8.4C9.17274 39.589 9.79995 38.9712 9.79995 38.21C9.79995 37.4488 9.17274 36.831 8.4 36.831H2.84895C3.549 18.8729 18.1691 4.47272 36.3999 3.78313V7.87071C36.3999 8.63188 37.0271 9.24971 37.7998 9.24971C38.5726 9.24971 39.1998 8.63188 39.1998 7.87071V3.78313C57.1814 4.46852 71.6951 18.495 72.7325 36.191L67.2725 30.8127C66.7167 30.2831 65.8306 30.2983 65.2929 30.8471C64.7694 31.3822 64.7694 32.2289 65.2929 32.7627L73.1077 40.4606C73.2547 40.6358 73.4452 40.7723 73.6593 40.8564C73.7139 40.8728 73.7699 40.8853 73.8258 40.8963C73.9225 40.9307 74.0219 40.9541 74.1226 40.9666C74.1366 40.9666 74.1492 40.9666 74.1631 40.9666C74.1771 40.9666 74.1897 40.9666 74.2024 40.9666C74.3088 40.9583 74.4138 40.9376 74.5159 40.906C74.5733 40.899 74.6307 40.888 74.6867 40.8743C74.8757 40.808 75.0492 40.7019 75.1921 40.5626L83.1134 32.7625C83.651 32.215 83.6356 31.3421 83.0785 30.8125C82.5352 30.2968 81.6757 30.2968 81.1338 30.8125L75.538 36.3205C74.5388 16.5533 57.9922 1.02366 37.8994 0.994573C37.8645 0.99328 37.8349 0.975342 37.8 0.975342C37.7651 0.975342 37.7355 0.99328 37.7006 0.994573C16.9022 1.02221 0.0475781 17.6248 0.0195234 38.1121C0.0195234 38.1465 0 38.1756 0 38.21C0 38.2444 0.0182109 38.2735 0.0195234 38.3079C0.0544688 58.2906 16.1083 74.6753 36.3804 75.4185H36.4322C37.1839 75.4185 37.8028 74.8323 37.8308 74.0919Z"
              fill="#041C32"
            />
            <path
              d="M56.6089 19.6824C56.0629 19.1445 55.1754 19.1445 54.6294 19.6824L39.585 34.5004C38.4482 34.0012 37.1505 34.0012 36.0135 34.5004L28.8903 27.4837C28.3344 26.9541 27.4483 26.9693 26.9107 27.5181C26.3872 28.0532 26.3872 28.8999 26.9107 29.4337L34.0198 36.4365C33.0217 38.4954 33.9065 40.9598 35.9966 41.9432C37.601 42.6976 39.5135 42.3748 40.7692 41.1364C42.032 39.9022 42.3581 38.0128 41.5784 36.438L56.6088 21.6323C57.1549 21.0945 57.1549 20.2202 56.6089 19.6824ZM38.7898 39.185C38.2367 39.7063 37.3633 39.7063 36.8102 39.185C36.2627 38.6472 36.2627 37.7729 36.8102 37.235C37.3577 36.6972 38.2438 36.6957 38.7898 37.235C39.3373 37.7729 39.3373 38.6459 38.7898 39.185Z"
              fill="#041C32"
            />
          </svg>
          <h3>{t("home.why-us.bloc1.title")}</h3>
          <p>{t("home.why-us.bloc1.text")}</p>
        </div>
        <div className="why-us-element">
          <svg
            width="96"
            height="84"
            viewBox="0 0 96 84"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M60.1986 67.1052H37.3675C37.0091 67.1052 36.6654 66.9633 36.412 66.7106C36.1586 66.458 36.0162 66.1153 36.0162 65.758C36.0162 65.4007 36.1586 65.0581 36.412 64.8054C36.6654 64.5528 37.0091 64.4108 37.3675 64.4108H60.1986C60.6644 64.4133 61.126 64.3239 61.5569 64.1477C61.9879 63.9715 62.3796 63.7121 62.7094 63.3843C62.7703 63.3237 62.8216 63.2657 62.8716 63.2105C62.8986 63.1693 62.9279 63.1298 62.9594 63.0919C63.4851 62.4611 63.772 61.6663 63.7702 60.8462C63.7692 59.9011 63.3921 58.9951 62.7218 58.3268C62.0514 57.6585 61.1426 57.2826 60.1946 57.2816H47.4378C47.2494 57.2815 47.0632 57.2421 46.891 57.166C46.7188 57.0899 46.5644 56.9788 46.4378 56.8397C44.7356 54.9766 42.6623 53.488 40.3503 52.469C38.0384 51.45 35.5386 50.9229 33.0108 50.9215H16.6135C16.2551 50.9215 15.9114 50.7796 15.6579 50.527C15.4045 50.2743 15.2621 49.9316 15.2621 49.5744C15.2621 49.2171 15.4045 48.8744 15.6579 48.6218C15.9114 48.3691 16.2551 48.2272 16.6135 48.2272H33.0148C35.8173 48.2288 38.5907 48.7926 41.17 49.8851C43.7493 50.9775 46.0817 52.5761 48.0284 54.5859H60.1986C61.8625 54.5876 63.4578 55.2471 64.6347 56.4196C65.8116 57.5921 66.4741 59.1821 66.477 60.8408C66.4777 62.2379 66.0048 63.5942 65.1351 64.6897C65.101 64.7452 65.0626 64.7979 65.0202 64.8473C64.8851 64.9982 64.7689 65.1356 64.6297 65.2744C64.0488 65.8559 63.3582 66.3171 62.5977 66.6313C61.8372 66.9456 61.0219 67.1066 60.1986 67.1052V67.1052Z"
              fill="#041C32"
            />
            <path
              d="M48.7324 83.0423C45.4024 83.0444 42.0975 82.4677 38.9662 81.3382L16.1527 73.08C15.8158 72.9579 15.5413 72.7075 15.3897 72.3837C15.238 72.06 15.2215 71.6894 15.3439 71.3535C15.4663 71.0177 15.7175 70.7441 16.0423 70.5929C16.3671 70.4416 16.7388 70.4252 17.0757 70.5473L39.8919 78.8068C43.2465 80.011 46.8126 80.5187 50.3712 80.2986C53.9298 80.0785 57.4056 79.1353 60.5851 77.527L91.5419 61.765C89.8689 60.4326 87.8813 59.5496 85.7688 59.2003C83.6563 58.8511 81.4893 59.0471 79.4743 59.7698L64.6284 65.1585C64.435 65.263 64.2186 65.3176 63.9987 65.3175C63.7254 65.3203 63.4578 65.2404 63.231 65.0884C63.0043 64.9364 62.8291 64.7194 62.7285 64.4661C62.628 64.2128 62.6068 63.9351 62.6678 63.6696C62.7288 63.4041 62.8692 63.1632 63.0703 62.9788C63.2032 62.8509 63.3616 62.7523 63.5351 62.6892L78.5527 57.2385C81.0703 56.3359 83.7817 56.1098 86.4147 56.5827C89.0477 57.0557 91.5095 58.2111 93.5527 59.9328L94.8284 61.0348C94.9955 61.1793 95.1246 61.3625 95.2041 61.5683C95.2837 61.7741 95.3113 61.9962 95.2846 62.2152C95.2579 62.4341 95.1777 62.6432 95.0511 62.824C94.9244 63.0049 94.7551 63.1519 94.5581 63.2523L61.8081 79.9263C57.7563 81.9765 53.2763 83.0442 48.7324 83.0423V83.0423Z"
              fill="#041C32"
            />
            <path
              d="M16.6081 76.8911H2.05405C1.69565 76.8911 1.35193 76.7492 1.0985 76.4965C0.845072 76.2439 0.702698 75.9012 0.702698 75.5439V46.2105C0.702698 45.8532 0.845072 45.5105 1.0985 45.2579C1.35193 45.0052 1.69565 44.8633 2.05405 44.8633H16.6081C16.9665 44.8633 17.3102 45.0052 17.5637 45.2579C17.8171 45.5105 17.9595 45.8532 17.9595 46.2105V75.5439C17.9595 75.9012 17.8171 76.2439 17.5637 76.4965C17.3102 76.7492 16.9665 76.8911 16.6081 76.8911ZM3.4054 74.1968H15.2568V47.5576H3.4054V74.1968Z"
              fill="#041C32"
            />
            <path
              d="M60.8379 48.6893C56.0716 48.6893 51.4124 47.2803 47.4494 44.6405C43.4864 42.0007 40.3976 38.2486 38.5736 33.8587C36.7496 29.4689 36.2724 24.6384 37.2023 19.9782C38.1321 15.3179 40.4273 11.0372 43.7975 7.67736C47.1678 4.31751 51.4618 2.02942 56.1364 1.10244C60.8111 0.175457 65.6566 0.651217 70.06 2.46956C74.4635 4.28789 78.2272 7.36714 80.8752 11.3179C83.5232 15.2687 84.9365 19.9135 84.9365 24.6651C84.929 31.0344 82.3876 37.1407 77.8699 41.6445C73.3521 46.1483 67.2269 48.6818 60.8379 48.6893ZM60.8379 3.33383C56.6062 3.33383 52.4696 4.58477 48.951 6.92847C45.4325 9.27217 42.6902 12.6034 41.0707 16.5008C39.4513 20.3983 39.0275 24.6869 39.8529 28.8245C40.6784 32.962 42.716 36.7626 45.7082 39.7457C48.7003 42.7288 52.5126 44.7604 56.6629 45.5836C60.8132 46.4067 65.1152 45.9845 69.0248 44.3703C72.9344 42.7561 76.2761 40.0224 78.6273 36.5149C80.9785 33.0074 82.2335 28.8837 82.2338 24.6651C82.2274 19.01 79.9711 13.5884 75.96 9.58964C71.9488 5.59091 66.5104 3.34159 60.8379 3.33518V3.33383Z"
              fill="#ECB365"
            />
            <path
              d="M60.8379 26.0122C59.3827 25.9667 57.9733 25.4949 56.7855 24.6558C55.5976 23.8166 54.6841 22.6473 54.1587 21.2937C53.6334 19.9401 53.5197 18.4623 53.8317 17.0447C54.1436 15.6271 54.8676 14.3324 55.913 13.3224C56.9585 12.3124 58.2793 11.6318 59.7104 11.3655C61.1415 11.0991 62.6196 11.2589 63.9602 11.8249C65.3008 12.3908 66.4444 13.3379 67.2485 14.5478C68.0525 15.7578 68.4812 17.177 68.4811 18.6283C68.4811 18.9856 68.3387 19.3283 68.0853 19.5809C67.8319 19.8336 67.4882 19.9755 67.1298 19.9755C66.7714 19.9755 66.4276 19.8336 66.1742 19.5809C65.9208 19.3283 65.7784 18.9856 65.7784 18.6283C65.827 17.6437 65.5785 16.6671 65.065 15.8246C64.5515 14.9822 63.7965 14.3124 62.8975 13.9019C61.9984 13.4913 60.9966 13.3588 60.0212 13.5213C59.0459 13.6839 58.1418 14.1341 57.4256 14.8139C56.7095 15.4937 56.2141 16.3719 56.0034 17.3351C55.7927 18.2983 55.8764 19.3023 56.2437 20.2176C56.6109 21.1329 57.2449 21.9175 58.0638 22.4701C58.8828 23.0227 59.849 23.318 60.8379 23.3179C61.1963 23.3179 61.54 23.4598 61.7934 23.7124C62.0468 23.9651 62.1892 24.3077 62.1892 24.665C62.1892 25.0223 62.0468 25.365 61.7934 25.6176C61.54 25.8703 61.1963 26.0122 60.8379 26.0122Z"
              fill="#ECB365"
            />
            <path
              d="M60.8378 38.0843C58.8429 38.1128 56.918 37.3515 55.4852 35.9673C54.0525 34.5832 53.2287 32.6891 53.1946 30.7004C53.1946 30.3431 53.337 30.0005 53.5904 29.7478C53.8438 29.4952 54.1875 29.3532 54.5459 29.3532C54.9043 29.3532 55.248 29.4952 55.5015 29.7478C55.7549 30.0005 55.8973 30.3431 55.8973 30.7004C55.8484 31.6851 56.0966 32.6618 56.61 33.5044C57.1233 34.3471 57.8782 35.017 58.7772 35.4278C59.6762 35.8386 60.6781 35.9713 61.6535 35.8089C62.6289 35.6465 63.5332 35.1964 64.2495 34.5167C64.9658 33.8369 65.4613 32.9588 65.6721 31.9956C65.8829 31.0323 65.7993 30.0282 65.4321 29.1129C65.0649 28.1975 64.4309 27.4128 63.612 26.8601C62.793 26.3074 61.8268 26.0121 60.8378 26.0122C60.4794 26.0122 60.1357 25.8703 59.8823 25.6177C59.6288 25.365 59.4865 25.0224 59.4865 24.6651C59.4865 24.3078 59.6288 23.9651 59.8823 23.7125C60.1357 23.4598 60.4794 23.3179 60.8378 23.3179C61.8311 23.2851 62.8209 23.4519 63.7482 23.8082C64.6755 24.1645 65.5215 24.7031 66.2358 25.392C66.95 26.0809 67.518 26.906 67.9059 27.8182C68.2938 28.7304 68.4937 29.711 68.4937 30.7018C68.4937 31.6925 68.2938 32.6732 67.9059 33.5854C67.518 34.4975 66.95 35.3226 66.2358 36.0115C65.5215 36.7004 64.6755 37.239 63.7482 37.5954C62.8209 37.9517 61.8311 38.1184 60.8378 38.0857V38.0843Z"
              fill="#ECB365"
            />
            <path
              d="M60.8379 40.3489C60.4795 40.3489 60.1357 40.2069 59.8823 39.9543C59.6289 39.7016 59.4865 39.359 59.4865 39.0017V10.3216C59.4865 9.96431 59.6289 9.62165 59.8823 9.369C60.1357 9.11636 60.4795 8.97443 60.8379 8.97443C61.1963 8.97443 61.54 9.11636 61.7934 9.369C62.0468 9.62165 62.1892 9.96431 62.1892 10.3216V39.0017C62.1892 39.359 62.0468 39.7016 61.7934 39.9543C61.54 40.2069 61.1963 40.3489 60.8379 40.3489Z"
              fill="#ECB365"
            />
          </svg>
          <h3>{t("home.why-us.bloc2.title")}</h3>
          <p>{t("home.why-us.bloc2.text")}</p>
        </div>
        <div className="why-us-element">
          <svg
            width="114"
            height="85"
            viewBox="0 0 114 85"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
          >
            <rect
              y="32.7505"
              width="92.0535"
              height="51.5315"
              rx="2"
              fill="url(#pattern0)"
            />
            <rect
              x="113.713"
              y="53.0919"
              width="86.6385"
              height="52.8876"
              rx="2"
              transform="rotate(180 113.713 53.0919)"
              fill="url(#pattern1)"
            />
            <path
              d="M77.7552 29.1752C68.3378 29.1752 63.6891 35.928 59.1958 42.4591C54.8803 48.7328 50.8053 54.6574 42.6903 54.6574C36.4762 54.6574 31.4194 49.5126 31.4194 43.1904C31.4194 36.8683 36.4762 31.7235 42.6903 31.7235C49.1823 31.7235 52.9844 35.5152 56.1302 39.6178C56.5535 40.1683 57.34 40.2702 57.8859 39.8396C58.432 39.4063 58.5296 38.6036 58.1038 38.0482C54.7401 33.6627 50.2768 29.1754 42.6903 29.1754C35.0937 29.1752 28.9147 35.4643 28.9147 43.1904C28.9147 50.9166 35.0937 57.2057 42.6903 57.2057C52.1077 57.2057 56.7564 50.4529 61.2497 43.9218C65.5652 37.6481 69.6402 31.7235 77.7552 31.7235C83.9693 31.7235 89.0261 36.8683 89.0261 43.1904C89.0261 49.5126 83.9693 54.6574 77.7552 54.6574C71.2632 54.6574 67.4611 50.8657 64.3153 46.7631C63.887 46.2126 63.1031 46.1082 62.5596 46.5413C62.0135 46.9746 61.916 47.7772 62.3417 48.3327C65.7054 52.7182 70.1687 57.2055 77.7552 57.2055C85.3518 57.2057 91.5308 50.9166 91.5308 43.1904C91.5308 35.4643 85.3518 29.1752 77.7552 29.1752Z"
              fill="#ECB365"
            />
            <defs>
              <pattern
                id="pattern0"
                patternContentUnits="objectBoundingBox"
                width="1"
                height="1"
              >
                <use
                  xlinkHref="#image0_0_1"
                  transform="matrix(0.00216965 0 0 0.00411091 -0.0528361 -0.525836)"
                />
              </pattern>
              <pattern
                id="pattern1"
                patternContentUnits="objectBoundingBox"
                width="1"
                height="1"
              >
                <use
                  xlinkHref="#image0_0_1"
                  transform="matrix(0.00216965 0 0 0.0040055 -0.0668606 -0.486713)"
                />
              </pattern>
              <image
                id="image0_0_1"
                width="512"
                height="512"
                xlinkHref="data:image/png;base64,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"
              />
            </defs>
          </svg>
          <h3>{t("home.why-us.bloc3.title")}</h3>
          <p>{t("home.why-us.bloc3.text")}</p>
        </div>
        <div className="why-us-element">
          <svg
            width="104"
            height="89"
            viewBox="0 0 104 89"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.354248 78.7191V-4.02466L55.6464 37.3475L0.354248 78.7191ZM4.00398 3.22287V71.4715L49.6173 37.3469L4.00398 3.22287Z"
              fill="#010002"
            />
            <path
              d="M59.6624 62.6667H62.7663V57.4407C62.2309 57.3695 60.3892 57.2093 58.2444 57.2093C53.7691 57.2093 50.7034 59.9305 50.7034 64.9319V68.85H46.4733V74.6923H50.7034V88.3653L56.7569 88.3667V74.6936H61.4956L62.2479 68.8514H56.7554V65.5112C56.7583 63.8226 57.2286 62.6667 59.6624 62.6667Z"
              fill="#ECB365"
            />
            <path
              d="M103.904 65.8988C103.826 64.201 103.555 63.0415 103.16 62.027C102.758 60.9627 102.128 59.9986 101.314 59.2018C100.515 58.3903 99.5481 57.7622 98.4805 57.3615C97.4626 56.9675 96.2998 56.6981 94.5967 56.6209C92.8904 56.543 92.3452 56.5245 88 56.5245C83.6548 56.5245 83.1096 56.543 81.4033 56.6204C79.7002 56.6981 78.5374 56.9677 77.5195 57.362C76.4519 57.7624 75.4849 58.3903 74.6855 59.2018C73.8716 59.9984 73.2415 60.9625 72.8396 62.0268C72.4443 63.0415 72.1741 64.201 72.0967 65.8986C72.0186 67.5999 72 68.1431 72 72.4749C72 76.8069 72.0186 77.3504 72.0967 79.0514C72.1743 80.7491 72.4448 81.9086 72.8403 82.9232C73.2419 83.9873 73.8718 84.9516 74.6858 85.7482C75.4849 86.5597 76.4521 87.1876 77.5198 87.588C78.5374 87.9825 79.7004 88.252 81.4036 88.3296C83.1101 88.4072 83.655 88.4255 88.0002 88.4255C92.3455 88.4255 92.8906 88.4072 94.5969 88.3296C96.3 88.252 97.4629 87.9825 98.4807 87.588C100.63 86.7595 102.329 85.0658 103.16 82.9232C103.556 81.9086 103.826 80.7491 103.904 79.0514C103.981 77.3502 104 76.8069 104 72.4751C104 68.1431 103.981 67.5999 103.904 65.8988ZM101.024 78.9207C100.953 80.476 100.692 81.3205 100.473 81.8825C99.9346 83.2737 98.8318 84.3731 97.4363 84.9098C96.8726 85.1281 96.0254 85.388 94.4653 85.4588C92.7786 85.5358 92.2725 85.5518 88 85.5518C83.7273 85.5518 83.2214 85.5358 81.5344 85.4588C79.9746 85.388 79.1274 85.1281 78.5635 84.9098C77.8687 84.654 77.24 84.2463 76.7239 83.7164C76.1924 83.2019 75.7834 82.5754 75.5269 81.8825C75.3079 81.3205 75.0471 80.476 74.9761 78.9207C74.8992 77.2389 74.8828 76.7344 74.8828 72.4754C74.8828 68.2161 74.8992 67.7118 74.9761 66.0298C75.0474 64.4745 75.3079 63.63 75.5269 63.068C75.7834 62.3751 76.1926 61.7483 76.7239 61.2338C77.24 60.704 77.8687 60.2963 78.5637 60.0407C79.1274 59.8222 79.9746 59.5625 81.5347 59.4914C83.2217 59.4148 83.7278 59.3984 88 59.3984C92.2722 59.3984 92.7781 59.4148 94.4653 59.4917C96.0254 59.5625 96.8723 59.8224 97.4363 60.0407C98.1311 60.2965 98.7598 60.7042 99.2759 61.2338C99.8074 61.7483 100.216 62.3751 100.473 63.068C100.692 63.63 100.953 64.4745 101.024 66.0298C101.101 67.7116 101.117 68.2161 101.117 72.4751C101.117 76.7344 101.101 77.2387 101.024 78.9207Z"
              fill="url(#paint0_linear_0_1)"
            />
            <path
              d="M87.9998 64.2842C83.4622 64.2842 79.7837 67.9515 79.7837 72.4751C79.7837 76.9987 83.4622 80.6658 87.9998 80.6658C92.5376 80.6658 96.2161 76.9987 96.2161 72.4751C96.2161 67.9515 92.5376 64.2842 87.9998 64.2842ZM87.9998 77.7919C85.0544 77.7917 82.6665 75.4113 82.6667 72.4749C82.6667 69.5387 85.0544 67.1581 88 67.1581C90.9456 67.1583 93.3333 69.5387 93.3333 72.4749C93.3333 75.4113 90.9453 77.7919 87.9998 77.7919Z"
              fill="url(#paint1_linear_0_1)"
            />
            <path
              d="M98.4607 63.9607C98.4607 65.0178 97.6011 65.8747 96.5408 65.8747C95.4802 65.8747 94.6206 65.0178 94.6206 63.9607C94.6206 62.9035 95.4802 62.0465 96.5408 62.0465C97.6011 62.0465 98.4607 62.9035 98.4607 63.9607Z"
              fill="url(#paint2_linear_0_1)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_0_1"
                x1="74.6854"
                y1="85.7484"
                x2="101.232"
                y2="59.1193"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#ECB365" />
                <stop offset="1" stopColor="#041C32" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_0_1"
                x1="82.1902"
                y1="78.2668"
                x2="93.7737"
                y2="66.6474"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#041C32" />
                <stop stopColor="#ECB365" />
                <stop offset="0.0001" stopColor="#041C32" />
              </linearGradient>
              <linearGradient
                id="paint2_linear_0_1"
                x1="95.1831"
                y1="65.3141"
                x2="97.8899"
                y2="62.5988"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0.9999" stopColor="#ECB365" />
                <stop offset="1" stopColor="#041C32" />
              </linearGradient>
            </defs>
          </svg>
          <h3>{t("home.why-us.bloc4.title")}</h3>
          <p>{t("home.why-us.bloc4.text")}</p>
        </div>
      </section>
    </div>
  );
};

export default WhyUs;
