import React from 'react';

type InputAreaProps = {
    onProductChange: (value: string) => void;
  };

const InputArea: React.FC<InputAreaProps> = ({ onProductChange }) => {
  // フォーム送信の処理をここに記述することもできます
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // フォームのデフォルト送信動作を防ぎます
    // 入力されたPRO_IDを取得するために、event.currentTargetを使用します
    const proId = (event.currentTarget.elements.namedItem('pro_id') as HTMLInputElement).value;
    onProductChange(proId);
    console.log('Sending PRO_ID:', proId); // 実際の送信処理に置き換えてください
  };

  return (
<div className="px-5 py-5 mx-auto max-w-md">
  <form onSubmit={handleSubmit} className="flex flex-col gap-4">
    <button
      type="submit"
      className="px-5 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring"
    >
      追加
    </button>
  </form>
</div>
  );
}

export default InputArea;
