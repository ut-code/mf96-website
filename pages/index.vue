<template>
  <v-app>
    <v-app-bar>
      <v-toolbar-title
        >ut.code(); 第96回五月祭企画 「あなたのためのプログラミング」
      </v-toolbar-title>
    </v-app-bar>
    <v-main>
      <v-container>
        <v-row>
          <v-col>
            <v-card>
              <v-card-title>あなたのためのプログラミング</v-card-title>
              <v-card-text>
                <p>ut.code(); の第96回五月祭企画へようこそ！</p>
                <p>
                  「あなたのためのプログラミング」は、皆さま全員に向けた企画です。<br />
                  プログラマーの方も、プログラミングをやったことがないという方も、お楽しみいただけます。<br />
                  お子さまも、親御さんも、学生さんも、社会人の方も、お楽しみいただけます。
                </p>
              </v-card-text>
            </v-card>
            <contents />
            <!-- <v-card>
              <v-card-title id="kampa" class="headline">
                カンパのお願い
                <v-spacer />
                <v-icon>mdi-cash</v-icon>
              </v-card-title>
              <v-card-text>
                <p>
                  第73回駒場祭企画では、お貸しする用のPCのレンタル費・ポスターの印刷費など、費用がかかっております。<br />
                  カンパと言う形で、ご参加いただいた皆さまから少しでも支援いただければ幸いです。
                </p>
                <p>よろしくお願いいたします。</p>
                <ul>
                  <li>カンパするか否かと金額については任意です。</li>
                  <li>
                    カンパで集めた金銭は ut.code();
                    が駒場祭をする上でかかった必要経費の補填に充てさせていただきます。
                  </li>
                </ul>
                <external-button :url="paypayUrl"> PayPay </external-button>
                <p>PCからご覧の方は以下の二次元コードを読み取ってください。</p>
                <div justify="center" align="center" width="50%">
                  <v-img
                    width="50%"
                    src="/paypay.svg"
                    alt="PayPay二次元コード"
                  />
                </div>
              </v-card-text>
            </v-card> -->
            <v-card>
              <v-card-title id="contact" class="headline">
                お問い合わせ
              </v-card-title>
              <v-card-text>
                <p>
                  問い合わせは contact〜utcode.net
                  にメールをいただくか、以下のSNSからお願いいたします。<br />
                  spam対策で@を〜に変更しています。
                </p>
                <p>
                  なお ut.code();
                  では、プログラミングを始めてみたい、新しいスキルを身につけたいという学生を常時募集しています！<br />
                  ご興味をお持ちの方は、ぜひご連絡ください！
                </p>
                <external-button url="https://twitter.com/utokyo_code">
                  公式Twitter
                </external-button>
                <external-button url="https://line.me/ti/p/%40nlr3843e">
                  公式LINE
                </external-button>
                <zoom />
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>
