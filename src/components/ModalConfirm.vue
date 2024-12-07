<script setup lang="ts">
    const props = defineProps({
        nome: String,
        show: {
            type: Boolean,
            default: false,
        },
    })
</script>

<template>
    <div class="modal fade" :class="{ show: show, 'd-block': show }" id="exampleModal" tabindex="-1" aria-labelledby="" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Deletar pessoa</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <slot name="body" />
        </div>
        <div class="modal-footer">
          <slot name="footer" />
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
            Close
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
    .modal{
        color: #000;
    }
</style>