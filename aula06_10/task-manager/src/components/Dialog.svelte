<script>
  export let func;
  export let task;
</script>

<main>
  <div class="container">
    <div class="top-line">
      <button on:click={() => func()}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="#FFF"
          class="bi bi-x-circle-fill"
          viewBox="0 0 16 16"
        >
          <path
            d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293z"
          />
        </svg>
      </button>
    </div>
    <div class="content">
      {#if task}
        <span><b>ID:</b> {task.id}</span>
        <span><b>TAREFA:</b> {task.tarefa}</span>
        <span><b>DESCRIÇÃO:</b> {task.descricao}</span>
        <span><b>PRIORIDADE:</b> {task.prioridade}</span>
        <span><b>PRAZO:</b> {task.prazo}</span>
        <span><b>SITUAÇÃO:</b> {task.status ? 'Concluída' : 'Pendente'}</span>
      {:else}
        <span>Nenhuma tarefa selecionada</span>
      {/if}
    </div>
  </div>
</main>

<style>
  main {
    position: absolute;
    top: 0px;
    left: 0px;
    z-index: 10;
    display: flex;
    width: 100%;
    min-height: 100vh;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.5); /* Fundo escuro semi-transparente */
  }

  .container {
    width: 560px;
    height: 320px;
    background-color: rgba(255, 255, 255, 0.95);
    border: 2px solid lightgray;
    box-shadow: 3px 3px 3px 2px darkgray;
    padding: 15px;
    border-radius: 8px;
  }

  .top-line {
    display: flex;
    justify-content: end;
    margin: 5px;
  }

  .content {
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  button {
    text-align: end;
    text-decoration: none;
    padding: 5px;
    border: none;
    border-radius: 5px;
    background-color: red;
  }

  button:hover {
    opacity: 0.7;
    cursor: grab;
  }

  span {
    margin-bottom: 5px;
    display: block;
    font-size: 16px;
  }
</style>
