<script>
	export let icon = 'home';
	export let size = 'medium';
</script>

<svg class="slds-icon {size}" aria-hidden="true">
	<use xlink:href="symbols.svg#{icon}" />
</svg>
<title>{icon}</title>

<style>
	.slds-icon {
		width: 1.6rem;
		height: 1.6rem;
		fill: var(--icon-fill);
	}

	.slds-icon.small {
		width: 0.7rem;
		height: 0.7rem;
	}

	.slds-icon.x-small {
		width: 0.5rem;
		height: 0.5rem;
	}
</style>
