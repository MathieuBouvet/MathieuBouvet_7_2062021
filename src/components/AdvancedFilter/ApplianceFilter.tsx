import AdvancedFilter, { Props as AdvancedFilterProps } from "./AdvancedFilter";
import { Recipe } from "../../data/types";
import { dedupList } from "../../utils/dedupList";

import styles from "./advancedFilter.module.css";

interface Props extends Pick<AdvancedFilterProps, "onTagClick"> {
  recipes: Recipe[];
}

function getAppliance(recipe: Recipe): string {
  return recipe.appliance;
}

const ApplianceFilter = ({ recipes, onTagClick }: Props) => {
  const tags = dedupList(recipes.map(getAppliance));

  return (
    <AdvancedFilter
      tags={tags}
      onTagClick={onTagClick}
      label="appareil"
      className={styles.applianceFilter}
    />
  );
};

export default ApplianceFilter;
