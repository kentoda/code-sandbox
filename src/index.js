import "./styles.css";

const onClickAdd = () => {
  // テキストBOXの値を取得して、初期化する
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";
  createImcompleateList(inputText);
};

// 未完了リストから指定の要素を削除
const deleateFromIncompleateList = (target) => {
  document.getElementById("imcompleate-list").removeChild(target);
};

// 未完了リストに追加する関数
const createImcompleateList = (text) => {
  // div生成
  const div = document.createElement("div");
  div.className = "list-row";
  // li生成
  const li = document.createElement("li");
  li.innerText = text;

  // 完了ボタン作成
  const compleateButton = document.createElement("button");
  compleateButton.innerText = "完了";
  compleateButton.addEventListener("click", () => {
    // 押された完了ボタンのおや（div）を未完了リストから削除
    deleateFromIncompleateList(deleateButton.parentNode);
    // 完了リストに追加する要素
    const addTarget = compleateButton.parentNode;
    // todo内容テキストをを取得
    const text = addTarget.firstElementChild.innerText;
    // div以下を取得
    addTarget.textContent = null;
    // liタグ作成
    const li = document.createElement("li");
    li.innerText = text;

    // buttonタグを再生
    const backButton = document.createElement("button");
    backButton.innerText = "戻す";
    backButton.addEventListener("click", () => {
      // 押された戻すボタンのおやタグ(div)を完了リストから削除
      const deleateTarget = backButton.parentNode;
      document.getElementById("complate-list").removeChild(deleateTarget);
      // テキスト取得
      const text = backButton.parentNode.firstElementChild.innerText;
      createImcompleateList(text);
    });

    // divタグの子要素に各要素を設定
    addTarget.append(li);
    addTarget.append(backButton);

    // 完了リストに追加
    document.getElementById("complate-list").appendChild(addTarget);
  });

  // 削除ボタン作成
  const deleateButton = document.createElement("button");
  deleateButton.innerText = "削除";
  deleateButton.addEventListener("click", () => {
    // 押された削除ボタンのおや（div）を未完了リストから削除
    deleateFromIncompleateList(deleateButton.parentNode);
  });

  // divタグの子要素に各要素を設定
  div.appendChild(li);
  div.appendChild(compleateButton);
  div.appendChild(deleateButton);

  document.getElementById("imcompleate-list").appendChild(div);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
