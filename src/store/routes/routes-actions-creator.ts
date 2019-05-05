import store from '..';
import * as menuActions from '../menu/menu.actions';

export function setCategoryMenuParam(location: any) {
  const pathname = location.pathname;
  const selectedMenuCategoryIndex = pathname.lastIndexOf('/');
  const selectedMenuCategoryName = pathname.substr(
    selectedMenuCategoryIndex + 1
  );
  console.log(selectedMenuCategoryName);
  store.dispatch(menuActions.loadMenu(selectedMenuCategoryName));
}
