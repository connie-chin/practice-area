const $tabContainer = document.querySelector('.tab-container');
const $tabs = document.querySelectorAll('.tab');
const $views = document.querySelectorAll('.view');
if (!$tabContainer || !$tabs || !$views)
  throw new Error('The $tabContainer, $tabs, or $views query failed');
console.log('$views:', $views);
console.log('$tabs:', $tabs);
$tabContainer.addEventListener('click', (event: Event): void => {
  const eventTarget = event.target as HTMLDivElement;
  if (eventTarget.matches('.tab')) {
    // confirming a tab was clicked
    // console.log('eventTarget:', eventTarget);
    for (let i = 0; i < $tabs.length; i++) {
      // looping through the tabs to see which matches the one clicked
      if ($tabs[i] === eventTarget) $tabs[i].className = 'tab active';
      else $tabs[i].className = 'tab';
    }
    const dataView = eventTarget.dataset.view;
    // console.log('dataView:', dataView);
    for (let i = 0; i < $views.length; i++) {
      // looping through the views to see which matches the one clicked
      if ($views[i].getAttribute('data-view') === dataView)
        $views[i].className = 'view';
      else $views[i].className = 'view hidden';
    }
  }
});
